export default (content) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>title</title>
</head>
<body>
  ${content}
  <script async src="client.js" />
</body>
</html>
`
};

