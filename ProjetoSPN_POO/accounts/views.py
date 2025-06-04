from django.shortcuts import render, redirect
from .admin import CustomUserCreationForm
from django.contrib import messages


def register(request):
    form = CustomUserCreationForm()
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)

        if form.is_valid():
            user = form.save()
            messages.success(request, 'Registrado. Agora faça o login para começar!')
            return redirect('mysite')  # ajuste para a URL que desejar

        else:
            messages.error(request, 'Dados inválidos no cadastro. Verifique os campos.')

    return render(request, "registration/register.html", {"form": form})
