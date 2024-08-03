from django.contrib.auth.models import UserManager, AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone

# Create your models here.

class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('You have not provided a valid email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)

        return user
    
    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)
    
    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
     email = models.EmailField(max_length=255, unique=True, default='', blank=True)
     name = models.CharField(max_length=255, blank=True, default='')

     is_active = models.BooleanField(default=True)
     is_superuser = models.BooleanField(default=False)
     is_staff = models.BooleanField(default=False)

     date_joined = models.DateTimeField(default=timezone.now)
     last_login = models.DateTimeField(blank=True, null=True)

     objects = CustomUserManager()

     USERNAME_FIELD = 'email'
     EMAIL_FIELD = 'email'
     REQUIRED_FIELDS = []

     class Meta:
         verbose_name = 'User'
         verbose_name_plural = 'Users'

     def get_full_name(self):
         return self.name
     
     def get_short_name(self):
         return self.name or self.email.split('@')[0]

# class Registration(models.Model):
#     reg_as = models.Value(value='student')
#     first_name = models.CharField(max_length=100, null=False)
#     last_name = models.CharField(max_length=100, null=False)
#     dob = models.DateField(null=False)
#     phone = models.DecimalField(decimal_places=20, max_digits=30)
#     address = models.TextField(null=False)
#     unique_id = models.CharField(max_length=100, null=False)
#     email = models.EmailField(null=False)
#     password1 = models.CharField(max_length=100, null=False)
#     password2 = models.CharField(max_length=100, null=False)
#     image = models.ImageField(upload_to='./uploaded-image', null=False)


# class Student(models.Model):
#     username = models.CharField(max_length=100, null=False)
#     email = models.EmailField(max_length=100, null=False)
#     course_title = models.CharField(max_length=100, null=False)
#     course_code = models.CharField(max_length=100, null=False)


# class Instructor(models.Model):
#     title = models.CharField(max_length=10, null=False)
#     email = models.EmailField(max_length=100, null=False)
#     username = models.CharField(max_length=100, null=False)
#     course = models.CharField(max_length=250, null=False)
#     score = models.DecimalField(max_digits=10, decimal_places=3, null=False)
#     grade = models.CharField(max_length=10, null=False)
#     report = models.CharField(max_length=250)


