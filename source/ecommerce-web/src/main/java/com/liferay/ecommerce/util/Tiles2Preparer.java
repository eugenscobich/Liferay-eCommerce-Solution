package com.liferay.ecommerce.util;



import javax.servlet.http.HttpServletRequest;

import org.apache.tiles.AttributeContext;
import org.apache.tiles.context.TilesRequestContext;
import org.apache.tiles.preparer.ViewPreparerSupport;
import org.apache.tiles.servlet.context.ServletUtil;

public class Tiles2Preparer extends ViewPreparerSupport {
	@Override
	public void execute(TilesRequestContext tilesContext, AttributeContext attributeContext) {
		@SuppressWarnings("deprecation")
		HttpServletRequest request = (HttpServletRequest) tilesContext.getRequest();
		request.setAttribute(ServletUtil.FORCE_INCLUDE_ATTRIBUTE_NAME, true);
	}
}
