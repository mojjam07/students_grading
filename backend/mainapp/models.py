from django.db import models

# Create your models here.
class Registration(models.Model):
    reg_as = models.Value(value='student')
    first_name = models.CharField(max_length=100, null=False)
    last_name = models.CharField(max_length=100, null=False)
    dob = models.DateField(null=False)
    phone = models.DecimalField(decimal_places=20, max_digits=30)
    address = models.TextField(null=False)
    unique_id = models.CharField(max_length=100, null=False)
    email = models.EmailField(null=False)
    password1 = models.CharField(max_length=100, null=False)
    password2 = models.CharField(max_length=100, null=False)
    image = models.ImageField(upload_to='./uploaded-image', null=False)


class Student(models.Model):
    username = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, null=False)
    course_title = models.CharField(max_length=100, null=False)
    course_code = models.CharField(max_length=100, null=False)


class Instructor(models.Model):
    title = models.CharField(max_length=10, null=False)
    email = models.EmailField(max_length=100, null=False)
    username = models.CharField(max_length=100, null=False)
    course = models.CharField(max_length=250, null=False)
    score = models.DecimalField(max_digits=10, decimal_places=3, null=False)
    grade = models.CharField(max_length=10, null=False)
    report = models.CharField(max_length=250)


