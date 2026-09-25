@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Instale o Node.js 22 ou 24 pelo site oficial https://nodejs.org/ e abra este arquivo novamente.
  pause
  exit /b 1
)

echo Este assistente publica o Culto Sozo na conta Vercel gustavo-sanchos-projects.
echo O catalogo publico sera restaurado. Banco, testemunhos e administracao ainda precisam de configuracao.
echo.
echo Entre na Vercel quando o navegador solicitar.
call npx --yes vercel@59.26.0 login
if errorlevel 1 goto :failure

call npx --yes vercel@59.26.0 link --yes --project culto-sozo-netflix --scope gustavo-sanchos-projects
if errorlevel 1 goto :failure

call npx --yes vercel@59.26.0 deploy --prod --yes --scope gustavo-sanchos-projects
if errorlevel 1 goto :failure

echo.
echo Publicacao concluida pela CLI. Copie o endereco exibido acima para conferir o site.
pause
exit /b 0

:failure
echo.
echo A Vercel interrompeu a operacao. Copie a mensagem de erro exibida acima para continuar o atendimento.
pause
exit /b 1
