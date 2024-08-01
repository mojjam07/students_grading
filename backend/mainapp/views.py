from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializers import *

# Create your views here.
def home(request):
    return render(request, 'home.html')

# DRF views
class RegistrationView(APIView):
    serializer_class = RegistrationSerializer

    def get(self, request):
        response = [{'reg_as': response.reg_as,
                     'first_name': response.first_name, 
                     'last_name': response.last_name,
                     'dob': response.dob, 
                     'phone': response.phone, 
                     'address': response.address, 
                     'unique_id': response.unique_id, 
                     'email': response.email, 
                     'password1': response.password1, 
                     'password2': response.password2, 
                     'image': response.image}
                     for response in Registration.objects.all()]
        return Response(response)
    
    def post(self, request):
        response = RegistrationSerializer(data=request.data)
        if response.is_valid(raise_exception=True):
            response.save()
            return Response(response.data)
        

class StudentView(APIView):
    serializer_class = StudentSerializer

    def get(self, request):
        response = [{'name': response.name, 
                     'email': response.email, 
                     'course_title': response.course_title, 
                     'course_code': response.course_code}
                     for response in Student.objects.all()]
        return Response(response)
    
    def post(self, request):
        response = StudentSerializer(data=request.data)
        if response.is_valid(raise_exception=True):
            response.save()
            return Response(response.data)
        
class InstructorView(APIView):
    serializer_class = InstructorSerializer

    def get(self, request):
        response =[{'title': response.title, 
                    'email': response.email, 
                    'name': response.name, 
                    'course': response.course, 
                    'score': response.score, 
                    'grade': response.grade, 
                    'report': response.report}
                    for response in Instructor.objects.all()]
        return Response(response)
    
    def post(self, request):
        response = InstructorSerializer(data=request.data)
        if response.is_valid(raise_exception=True):
            response.save()
            return Response(response.data)