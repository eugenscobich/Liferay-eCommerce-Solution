package com.liferay.ecommerce.service.store;

import java.util.List;
import java.util.Random;

public class Element {

	public String text;
	public List<Element> children;
	public boolean random = false;

	public String getText() {
		if (!random && (children == null || children.isEmpty())) {
			return text;
		} else if (random && !children.isEmpty()) {
			Random r = new Random();
			int i = r.nextInt(children.size());
			return children.get(i).getText();
		} else if (!children.isEmpty()) {
			String out = "";
			for (Element child : children) {
				out += child.getText();
			}
			return out;
		} else {
			return "+";
		}
		//return null;
	}

}
