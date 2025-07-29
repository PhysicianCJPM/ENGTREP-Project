from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def oer(request):
    return render(request,'oer.html')

def lms(request):
    return render(request,'lms.html')

def analytics(request):
    return render(request,'analytics.html')