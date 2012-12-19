package com.liferay.ecommerce.service.store;

import java.util.ArrayList;
import java.util.List;

public class Temp {

	public static void main(String[] args) {
		//String input = "eee {Please|Just} make this {cool|awesome|random} test sentence {rotate {quickly|fast} and random|spin and be random} aaa {rotate {quickly|{aa|bb}} and random|spin and be random}";
		String input = "{Please|Just} make this {cool|awesome|random} {rotate {quickly|super {fast|slow} } and random|spin and be random}";
		List<Element> elements = parseInput(input);

		for (Element element : elements) {
			System.out.print(element.getText());
		}

	}

	private static List<Element> parseInput(String input) {
		int start = 0;
		int end = 0;
		int find = 0;
		int i = 0;
		List<Element> elements = new ArrayList<Element>();
		for (char c : input.toCharArray()) {
			if (c == '{' && find == 0) {
				start = i;
				find++;
				if (start != end) {
					//System.out.println(input.substring(end, start));
					Element element = new Element();
					element.text = input.substring(end, start);
					elements.add(element);
				}
			} else if (c == '{') {
				find++;
			} else if (c == '}' && find == 1) {
				end = i + 1;
				find--;
				//System.out.println(input.substring(start, end));
				Element element = new Element();
				element.text = input.substring(start, end);
				element.children = parseVariants(input.substring(start + 1, end - 1));
				element.random = true;
				elements.add(element);
			} else if (c == '}') {
				find--;
			} else if (i == input.length() - 1 && end != i && end != 0) {
				Element element = new Element();
				element.text = input.substring(end, i + 1);
				//element.children = parseInput(element.text);
				//System.out.println(input.substring(end, i + 1));
				elements.add(element);
			}
			i++;
		}
		return elements;
	}

	private static List<Element> parseVariants(String text) {
		//System.out.println("==========================================");
		int start = 0;
		int end = 0;
		int find = 0;
		int i = 0;
		List<Element> elements = new ArrayList<Element>();
		for (char c : text.toCharArray()) {
			if (c == '|' && find == 0) {
				end = i;
				String out = text.substring(start, end);
				//System.out.println(out);
				start = i + 1;
				Element element = new Element();
				element.text = out;
				element.children = parseInput(out);
				elements.add(element);
			} else if (i == text.length() - 1 && end != i && end != 0) {
				//System.out.println("1");
				//System.out.println(text.substring(end + 1, i + 1));
				Element element = new Element();
				String out = text.substring(end + 1, i + 1);
				element.text = out;
				element.children = parseInput(out);
				elements.add(element);
			} else if (c == '{') {
				find++;
			} else if (c == '}') {
				find--;
			}
			i++;
		}
		//System.out.println("==========================================");
		return elements;
	}

}
