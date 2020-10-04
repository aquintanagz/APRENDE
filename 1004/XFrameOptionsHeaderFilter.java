package main.java.org.com.bancoazteca.servicios.util;

public class XFrameOptionsHeaderFilter {
	private FilterConfig filterConfig = null;
	private Options state = null;

	enum Options {
		allow, deny, sameorigin;
	}

	public void init(FilterConfig filterConfig) throws ServletException {
		this.filterConfig = filterConfig;

		String initParameter = this.filterConfig.getInitParameter("option");

		state = find(initParameter);

		this.filterConfig.getServletContext().log(String.format("Initialized %s with parameter %s", getClass().getSimpleName(), state));

	}

	private Options find(String initParameter) {
		if (initParameter != null) {

			// We don't want to use Enum.valueOf because that throws a relatively meaningless exception.
			for (Options o : Options.values()) {
				if (o.name().equalsIgnoreCase(initParameter)) {
					return o;
				}
			}

		}
		throw new IllegalArgumentException("Required option parameter missing or invalid. Valid values: allow, deny, sameorigin");
	}

	public void destroy() {
		this.filterConfig = null;
		state = null;
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletResponse resp = (HttpServletResponse) response;
		resp.addHeader("X-Frame-Options", state.name());
		chain.doFilter(request, response);
	}
}
