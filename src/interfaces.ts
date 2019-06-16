export interface IGtkTheme {
	on: IGtkThemeEventList;
	getTheme (): GtkData;
}

export interface GtkData {
	name: string;
	layout: {
		buttons: "left" | "right";
		decoration: string;
	};
	supported: {
		buttons: string[];
		// Currently defaults to true always. Need to figure out detection (checking versions of specific DE's is not maintainable..)
		// A proposal was written to address this here; https://github.com/jakejarrett/desktop-hinting
		csd: boolean;
	}
	gtk: {
		root: string;
		folder: string;
		css: string;
	}
}

export interface IGtkThemeEventList {
	themeChange?: (data: GtkData) => void;
	layoutChange?: (data: GtkData) => void;
}

export type prefetch = (context: IGtkTheme) => void;

export interface GTKThemeHooks {
	prefetch?: prefetch[];
}

export interface GTKThemeOptions {
	hooks?: GTKThemeHooks;
	events: IGtkThemeEventList;
}