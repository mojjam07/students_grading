from django.contrib import admin
from .models import Registration, Student, Instructor

# Register your models here.
admin.site.register(Registration)
admin.site.register(Student)
admin.site.register(Instructor)