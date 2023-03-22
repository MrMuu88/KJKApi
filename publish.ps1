#clear dist
Remove-Item .\dist -Recurse

#build without maps
tsc --sourcemap false

#copy node modules inside dist directory
Copy-Item .\node_modules .\dist -Recurse

#copy the apsetting file
copy-item .\src\AppSettings.default.json .\dist\AppSettings.json