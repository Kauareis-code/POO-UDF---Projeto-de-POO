function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.querySelector('.toggle-password');
  const toggleIcon = toggleButton.querySelector('img');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.src = '/static/IMG/Loging_Cadastro/VisualizaçãoAtivada.svg'; // caminho do ícone de "mostrar"
    toggleIcon.alt = 'Ocultar senha';
  } else {
    passwordInput.type = 'password';
    toggleIcon.src = '/static/IMG/Loging_Cadastro/VisualizaçãoDesativada.svg'; // caminho do ícone de "ocultar"
    toggleIcon.alt = 'Mostrar senha';
  }
}
