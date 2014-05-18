all:
		sass --watch \
		sass/layout.sass:static/css/layout.css \
		--style compressed


clean:
		rm -rf static/css/layout.css
		rm -rf static/css/post.css
		rm -rf static/css/page.css
