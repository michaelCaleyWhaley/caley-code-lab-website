
npm/install:
	npm ci

lint/application:
	npm run lint

# test/application:
# 	npm run test

build/application:
	npm run build

rewrite/extension:
	node ./deployment/rewrite-extension.js

s3/clean:
	aws s3 rm s3://caley-code-lab-website --recursive

s3/push/html:
	aws s3 sync ./out s3://caley-code-lab-website --exclude "*.*" --content-type text/html --content-language html

s3/push/remaining:
	aws s3 sync ./out s3://caley-code-lab-website --include "*.*"

cloudfront/cache/refresh:
	aws cloudfront create-invalidation --distribution-id E2B13P8E2HPNW7  --paths "/*"
