import requests
r = requests.get('https://home.xtramath.org/')
print(r.text.encode('utf-8'))