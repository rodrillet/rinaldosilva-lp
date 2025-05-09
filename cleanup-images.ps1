$usedImages = @(
    "rinaldo-silva-profile.jpeg",
    "banner-hero.jpeg", 
    "video-por-meio-da-fe.jpeg", 
    "video-5-marcas-avivamento.jpeg", 
    "video-vida-no-espirito.jpeg",
    "escola-dons-espirituais.png",
    "livros-dons-espirituais.png",
    "events-conferences-agenda.png",
    "contato-palestras-conferencias.png",
    "placeholder.svg",
    "healing-ministration-video-still.png"
)

# Listar todos os arquivos de imagem
$allImagesJpg = Get-ChildItem -Path "public" -Filter "*.jpg" | Select-Object -ExpandProperty Name
$allImagesJpeg = Get-ChildItem -Path "public" -Filter "*.jpeg" | Select-Object -ExpandProperty Name
$allImagesPng = Get-ChildItem -Path "public" -Filter "*.png" | Select-Object -ExpandProperty Name
$allImagesSvg = Get-ChildItem -Path "public" -Filter "*.svg" | Select-Object -ExpandProperty Name

$allImages = $allImagesJpg + $allImagesJpeg + $allImagesPng + $allImagesSvg

Write-Host "==== Imagens encontradas ====="
foreach ($image in $allImages) {
    Write-Host $image
}

Write-Host "`n==== Imagens não utilizadas para remover ===="
foreach ($image in $allImages) {
    if ($usedImages -notcontains $image) {
        Write-Host "Removendo: $image"
        Remove-Item -Path "public\$image" -Force
    }
}

Write-Host "`n==== Limpeza concluída ===="

# Auto-remover este script após a execução
Start-Sleep -Seconds 1
Write-Host "Removendo o script de limpeza..."
# Usa um script auxiliar para remover este arquivo, já que o PowerShell não pode excluir um script em execução
$tempScript = @"
Start-Sleep -Seconds 2
Remove-Item -Path "$PSCommandPath" -Force
Write-Host "Script de limpeza removido."
exit
"@

$tempScriptPath = [System.IO.Path]::GetTempFileName() + ".ps1"
Set-Content -Path $tempScriptPath -Value $tempScript
Start-Process powershell -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$tempScriptPath`"" -WindowStyle Hidden 