write-host "clear dist folder"
Remove-Item .\dist -Recurse

write-host "build without sourcemaps"
tsc --sourcemap false

write-host "copy node modules inside dist directory"
Copy-Item .\node_modules .\dist -Recurse

write-host "copy the apsetting file"
copy-item .\src\AppSettings.json .\dist\AppSettings.json