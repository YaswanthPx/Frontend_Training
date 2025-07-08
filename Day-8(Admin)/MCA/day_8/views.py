from django.shortcuts import render
from django.http import HttpResponse

from .models import StudentModel
from .forms import StudentForm
 
def insert_Student(request):
    context = {}
    ob_form=StudentForm(request.POST or None)
    if ob_form.is_valid():
        ob_form.save()
        return HttpResponse("Entered Student Details Saved Successfully")

    context['form']=ob_form
    return render(request,"insert_Student.html",context)
