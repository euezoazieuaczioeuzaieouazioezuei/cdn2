const temp =document.createElement("div")
temp.innerHTML="ceci est une div ajoutée par texte"
temp.innerHTML+="<img src=\"base64:PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI1LjYgMTQyLjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KIDxtZXRhZGF0YT4NCiAgPHJkZjpSREY+DQogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+DQogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+DQogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPg0KICAgIDxkYzp0aXRsZT5DaHJvbm88L2RjOnRpdGxlPg0KICAgIDxjYzpsaWNlbnNlIHJkZjpyZXNvdXJjZT0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLyIvPg0KICAgIDxkYzpjcmVhdG9yPg0KICAgICA8Y2M6QWdlbnQ+DQogICAgICA8ZGM6dGl0bGU+UsOpbWkgRHVib3Q8L2RjOnRpdGxlPg0KICAgICA8L2NjOkFnZW50Pg0KICAgIDwvZGM6Y3JlYXRvcj4NCiAgICA8ZGM6c3ViamVjdD4NCiAgICAgPHJkZjpCYWc+DQogICAgICA8cmRmOmxpPmNsaXAgYXJ0OyBjaHJvbm88L3JkZjpsaT4NCiAgICAgPC9yZGY6QmFnPg0KICAgIDwvZGM6c3ViamVjdD4NCiAgIDwvY2M6V29yaz4NCiAgIDxjYzpMaWNlbnNlIHJkZjphYm91dD0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLyI+DQogICAgPGNjOnBlcm1pdHMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNSZXByb2R1Y3Rpb24iLz4NCiAgICA8Y2M6cGVybWl0cyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rpc3RyaWJ1dGlvbiIvPg0KICAgIDxjYzpyZXF1aXJlcyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI05vdGljZSIvPg0KICAgIDxjYzpyZXF1aXJlcyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0F0dHJpYnV0aW9uIi8+DQogICAgPGNjOnBlcm1pdHMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNEZXJpdmF0aXZlV29ya3MiLz4NCiAgICA8Y2M6cmVxdWlyZXMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNTaGFyZUFsaWtlIi8+DQogICA8L2NjOkxpY2Vuc2U+DQogIDwvcmRmOlJERj4NCiA8L21ldGFkYXRhPg0KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjkuMzEgLTI2NC4zNikiPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCguNSAtLjg2NjAzIC44NjYwMyAuNSAtMTgzLjMyIDM3Ny4yKSIgc3Ryb2tlLXdpZHRoPSIxLjQxNzMiPg0KICAgPHBhdGggZD0ibTIzMi40IDI3Ny40aDUuMjY0djEyLjE5NWgtNS4yNjR6IiBmaWxsPSIjNGM0YzRjIiBzdHJva2U9IiM5ZTllOWUiLz4NCiAgIDxwYXRoIGQ9Im0yNDMgMjc3LjM2YTggMiAwIDAgMS04IDIgOCAyIDAgMCAxLTgtMiA4IDIgMCAwIDEgOC0yIDggMiAwIDAgMSA4IDJ6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCiAgPC9nPg0KICA8cGF0aCBkPSJtMjMxIDI3NS40aDh2MTRoLTh6Ii8+DQogIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDEuNTY0NiAwIDAgMS43NjI4IC0xMzMuNDUgLTIyMS45NykiIGQ9Im0yNDIgMjc5Ljg2YTYuNSAzLjUgMCAwIDEtNi41IDMuNSA2LjUgMy41IDAgMCAxLTYuNS0zLjUgNi41IDMuNSAwIDAgMSA2LjUtMy41IDYuNSAzLjUgMCAwIDEgNi41IDMuNXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIvPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDMgLjUgLS41IC44NjYwMyAyMDUuMTcgLTcwLjk2MikiIHN0cm9rZS13aWR0aD0iMS40MTczIj4NCiAgIDxwYXRoIGQ9Im0yMzIuNCAyNzcuNGg1LjI2NHYxMi4xOTVoLTUuMjY0eiIgZmlsbD0iIzRjNGM0YyIgc3Ryb2tlPSIjOWU5ZTllIi8+DQogICA8cGF0aCBkPSJtMjQzIDI3Ny4zNmE4IDIgMCAwIDEtOCAyIDggMiAwIDAgMS04LTIgOCAyIDAgMCAxIDgtMiA4IDIgMCAwIDEgOCAyeiIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQogIDwvZz4NCiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS4yOTQgMCAwIDEuMjk0IDEuMTkzMiAyNTkuMzcpIiBkPSJtMjI1LjY5IDY4YTQ1IDQ1IDAgMCAxLTQ1IDQ1IDQ1IDQ1IDAgMCAxLTQ1LTQ1IDQ1IDQ1IDAgMCAxIDQ1LTQ1IDQ1IDQ1IDAgMCAxIDQ1IDQ1eiIgZmlsbD0iI2M1YzVjNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNzM4MyIvPg0KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDMgLS41IC41IC44NjYwMyAwIDApIiBkPSJtMjguOCAzNjMuM2gydjhoLTJ6Ii8+DQogIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC0uNSAuODY2MDMgLS44NjYwMyAtLjUgMCAwKSIgZD0ibTE4Mi4zLTQzMi4yaDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTkwKSIgZD0ibS0zNDguNCAyODJoMnY4aC0yeiIvPg0KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDMgLS41IC41IC44NjYwMyAwIDApIiBkPSJtMjguOCA0NjUuM2gydjhoLTJ6Ii8+DQogIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC0uNSAtLjg2NjAzIC44NjYwMyAtLjUgMCAwKSIgZD0ibS00MTkuMyA3Ni44aDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLS44NjYwMyAtLjUgLjUgLS44NjYwMyAwIDApIiBkPSJtLTM3OC4yLTEzNi4zaDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjAzIC41IC0uNSAuODY2MDMgMCAwKSIgZD0ibTM3Ni4yIDIzMC4zaDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTApIiBkPSJtMzQ2LjQtMTg4aDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLjUgLjg2NjAzIC0uODY2MDMgLjUgMCAwKSIgZD0ibTQxNy4zIDE3LjJoMnY4aC0yeiIvPg0KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgtLjUgLjg2NjAzIC0uODY2MDMgLS41IDAgMCkiIGQ9Im0xODIuMy0zMzAuMmgydjhoLTJ6Ii8+DQogIDxwYXRoIGQ9Im0yMzQgMzk0LjRoMnY4aC0yeiIvPg0KICA8cGF0aCBkPSJtMjM0IDI5Mi40aDJ2OGgtMnoiLz4NCiAgPHBhdGggZD0ibTIwNy42MiAzMzEuNDkgMjUuMSAxOS4zMzUgNC4xOTQ2LTcuMjY1MnoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIuNTUwMSIvPg0KICA8cGF0aCBkPSJtMjM1IDI5NC4xNC0yLjA2OTQgNTMuMzI2aDQuMTM4OHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIuNTAzNSIvPg0KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCguNjY4MzMgMCAwIC42NjgzMyA4NS4wNzYgMTc5LjA1KSIgZD0ibTIzMy4yNiAyNTEuODRhOC45MzMzIDguOTMzMyAwIDAgMS04LjkzMzMgOC45MzMzIDguOTMzMyA4LjkzMzMgMCAwIDEtOC45MzMzLTguOTMzMyA4LjkzMzMgOC45MzMzIDAgMCAxIDguOTMzMy04LjkzMzMgOC45MzMzIDguOTMzMyAwIDAgMSA4LjkzMzMgOC45MzMzeiIvPg0KIDwvZz4NCjwvc3ZnPg==>"
temp.innerHTML+=`<form>
    <button id = "LedD2">reset</button>
    <button id="ste">stop/start</button>
    <input type="submit" value="envoyée">
</form>`
document.getElementById('content').appendChild(temp)const temp =document.createElement("div")
temp.innerHTML="ceci est une div ajoutée par texte"
temp.innerHTML+="<img src=\"base64:PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI1LjYgMTQyLjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KIDxtZXRhZGF0YT4NCiAgPHJkZjpSREY+DQogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+DQogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+DQogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPg0KICAgIDxkYzp0aXRsZT5DaHJvbm88L2RjOnRpdGxlPg0KICAgIDxjYzpsaWNlbnNlIHJkZjpyZXNvdXJjZT0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLyIvPg0KICAgIDxkYzpjcmVhdG9yPg0KICAgICA8Y2M6QWdlbnQ+DQogICAgICA8ZGM6dGl0bGU+UsOpbWkgRHVib3Q8L2RjOnRpdGxlPg0KICAgICA8L2NjOkFnZW50Pg0KICAgIDwvZGM6Y3JlYXRvcj4NCiAgICA8ZGM6c3ViamVjdD4NCiAgICAgPHJkZjpCYWc+DQogICAgICA8cmRmOmxpPmNsaXAgYXJ0OyBjaHJvbm88L3JkZjpsaT4NCiAgICAgPC9yZGY6QmFnPg0KICAgIDwvZGM6c3ViamVjdD4NCiAgIDwvY2M6V29yaz4NCiAgIDxjYzpMaWNlbnNlIHJkZjphYm91dD0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLyI+DQogICAgPGNjOnBlcm1pdHMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNSZXByb2R1Y3Rpb24iLz4NCiAgICA8Y2M6cGVybWl0cyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rpc3RyaWJ1dGlvbiIvPg0KICAgIDxjYzpyZXF1aXJlcyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI05vdGljZSIvPg0KICAgIDxjYzpyZXF1aXJlcyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0F0dHJpYnV0aW9uIi8+DQogICAgPGNjOnBlcm1pdHMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNEZXJpdmF0aXZlV29ya3MiLz4NCiAgICA8Y2M6cmVxdWlyZXMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNTaGFyZUFsaWtlIi8+DQogICA8L2NjOkxpY2Vuc2U+DQogIDwvcmRmOlJERj4NCiA8L21ldGFkYXRhPg0KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjkuMzEgLTI2NC4zNikiPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCguNSAtLjg2NjAzIC44NjYwMyAuNSAtMTgzLjMyIDM3Ny4yKSIgc3Ryb2tlLXdpZHRoPSIxLjQxNzMiPg0KICAgPHBhdGggZD0ibTIzMi40IDI3Ny40aDUuMjY0djEyLjE5NWgtNS4yNjR6IiBmaWxsPSIjNGM0YzRjIiBzdHJva2U9IiM5ZTllOWUiLz4NCiAgIDxwYXRoIGQ9Im0yNDMgMjc3LjM2YTggMiAwIDAgMS04IDIgOCAyIDAgMCAxLTgtMiA4IDIgMCAwIDEgOC0yIDggMiAwIDAgMSA4IDJ6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCiAgPC9nPg0KICA8cGF0aCBkPSJtMjMxIDI3NS40aDh2MTRoLTh6Ii8+DQogIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDEuNTY0NiAwIDAgMS43NjI4IC0xMzMuNDUgLTIyMS45NykiIGQ9Im0yNDIgMjc5Ljg2YTYuNSAzLjUgMCAwIDEtNi41IDMuNSA2LjUgMy41IDAgMCAxLTYuNS0zLjUgNi41IDMuNSAwIDAgMSA2LjUtMy41IDYuNSAzLjUgMCAwIDEgNi41IDMuNXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIvPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDMgLjUgLS41IC44NjYwMyAyMDUuMTcgLTcwLjk2MikiIHN0cm9rZS13aWR0aD0iMS40MTczIj4NCiAgIDxwYXRoIGQ9Im0yMzIuNCAyNzcuNGg1LjI2NHYxMi4xOTVoLTUuMjY0eiIgZmlsbD0iIzRjNGM0YyIgc3Ryb2tlPSIjOWU5ZTllIi8+DQogICA8cGF0aCBkPSJtMjQzIDI3Ny4zNmE4IDIgMCAwIDEtOCAyIDggMiAwIDAgMS04LTIgOCAyIDAgMCAxIDgtMiA4IDIgMCAwIDEgOCAyeiIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQogIDwvZz4NCiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS4yOTQgMCAwIDEuMjk0IDEuMTkzMiAyNTkuMzcpIiBkPSJtMjI1LjY5IDY4YTQ1IDQ1IDAgMCAxLTQ1IDQ1IDQ1IDQ1IDAgMCAxLTQ1LTQ1IDQ1IDQ1IDAgMCAxIDQ1LTQ1IDQ1IDQ1IDAgMCAxIDQ1IDQ1eiIgZmlsbD0iI2M1YzVjNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNzM4MyIvPg0KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDMgLS41IC41IC44NjYwMyAwIDApIiBkPSJtMjguOCAzNjMuM2gydjhoLTJ6Ii8+DQogIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC0uNSAuODY2MDMgLS44NjYwMyAtLjUgMCAwKSIgZD0ibTE4Mi4zLTQzMi4yaDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTkwKSIgZD0ibS0zNDguNCAyODJoMnY4aC0yeiIvPg0KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDMgLS41IC41IC44NjYwMyAwIDApIiBkPSJtMjguOCA0NjUuM2gydjhoLTJ6Ii8+DQogIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC0uNSAtLjg2NjAzIC44NjYwMyAtLjUgMCAwKSIgZD0ibS00MTkuMyA3Ni44aDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLS44NjYwMyAtLjUgLjUgLS44NjYwMyAwIDApIiBkPSJtLTM3OC4yLTEzNi4zaDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjAzIC41IC0uNSAuODY2MDMgMCAwKSIgZD0ibTM3Ni4yIDIzMC4zaDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTApIiBkPSJtMzQ2LjQtMTg4aDJ2OGgtMnoiLz4NCiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLjUgLjg2NjAzIC0uODY2MDMgLjUgMCAwKSIgZD0ibTQxNy4zIDE3LjJoMnY4aC0yeiIvPg0KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgtLjUgLjg2NjAzIC0uODY2MDMgLS41IDAgMCkiIGQ9Im0xODIuMy0zMzAuMmgydjhoLTJ6Ii8+DQogIDxwYXRoIGQ9Im0yMzQgMzk0LjRoMnY4aC0yeiIvPg0KICA8cGF0aCBkPSJtMjM0IDI5Mi40aDJ2OGgtMnoiLz4NCiAgPHBhdGggZD0ibTIwNy42MiAzMzEuNDkgMjUuMSAxOS4zMzUgNC4xOTQ2LTcuMjY1MnoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIuNTUwMSIvPg0KICA8cGF0aCBkPSJtMjM1IDI5NC4xNC0yLjA2OTQgNTMuMzI2aDQuMTM4OHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIuNTAzNSIvPg0KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCguNjY4MzMgMCAwIC42NjgzMyA4NS4wNzYgMTc5LjA1KSIgZD0ibTIzMy4yNiAyNTEuODRhOC45MzMzIDguOTMzMyAwIDAgMS04LjkzMzMgOC45MzMzIDguOTMzMyA4LjkzMzMgMCAwIDEtOC45MzMzLTguOTMzMyA4LjkzMzMgOC45MzMzIDAgMCAxIDguOTMzMy04LjkzMzMgOC45MzMzIDguOTMzMyAwIDAgMSA4LjkzMzMgOC45MzMzeiIvPg0KIDwvZz4NCjwvc3ZnPg==>"
temp.innerHTML+=`<form>
    <button id = "LedD2"value="LedD2">reset</button>
    <button id="ste"value="ste">stop/start</button>
    <input type="submit" value="envoyée">
</form>`
document.getElementById('content').appendChild(temp)