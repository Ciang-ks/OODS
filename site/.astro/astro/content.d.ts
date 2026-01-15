declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"homeworks": {
"hw_AI助力生科_李泽宏_孙本杰_陈昊冉.md": {
	id: "hw_AI助力生科_李泽宏_孙本杰_陈昊冉.md";
  slug: "hw_ai助力生科_李泽宏_孙本杰_陈昊冉";
  body: string;
  collection: "homeworks";
  data: InferEntrySchema<"homeworks">
} & { render(): Render[".md"] };
"hw_人工智能与数学_陈双本_2500017809.md": {
	id: "hw_人工智能与数学_陈双本_2500017809.md";
  slug: "hw_人工智能与数学_陈双本_2500017809";
  body: string;
  collection: "homeworks";
  data: InferEntrySchema<"homeworks">
} & { render(): Render[".md"] };
"hw_数据科学与人文社科_陈文睿_2500017471.md": {
	id: "hw_数据科学与人文社科_陈文睿_2500017471.md";
  slug: "hw_数据科学与人文社科_陈文睿_2500017471";
  body: string;
  collection: "homeworks";
  data: InferEntrySchema<"homeworks">
} & { render(): Render[".md"] };
"hw_数据科学中的数据准备_沈昱萱_2500017454.md": {
	id: "hw_数据科学中的数据准备_沈昱萱_2500017454.md";
  slug: "hw_数据科学中的数据准备_沈昱萱_2500017454";
  body: string;
  collection: "homeworks";
  data: InferEntrySchema<"homeworks">
} & { render(): Render[".md"] };
"hw_数据科学面面观感想_周骏捷_2500017740.md": {
	id: "hw_数据科学面面观感想_周骏捷_2500017740.md";
  slug: "hw_数据科学面面观感想_周骏捷_2500017740";
  body: string;
  collection: "homeworks";
  data: InferEntrySchema<"homeworks">
} & { render(): Render[".md"] };
"hw_数科中的优化_李泽宏_孙本杰_陈昊冉.md": {
	id: "hw_数科中的优化_李泽宏_孙本杰_陈昊冉.md";
  slug: "hw_数科中的优化_李泽宏_孙本杰_陈昊冉";
  body: string;
  collection: "homeworks";
  data: InferEntrySchema<"homeworks">
} & { render(): Render[".md"] };
"hw_机器学习基本理论_闻津菁_2500017430.md": {
	id: "hw_机器学习基本理论_闻津菁_2500017430.md";
  slug: "hw_机器学习基本理论_闻津菁_2500017430";
  body: string;
  collection: "homeworks";
  data: InferEntrySchema<"homeworks">
} & { render(): Render[".md"] };
"hw_自然语言处理_郑喆琪_2500017781.md": {
	id: "hw_自然语言处理_郑喆琪_2500017781.md";
  slug: "hw_自然语言处理_郑喆琪_2500017781";
  body: string;
  collection: "homeworks";
  data: InferEntrySchema<"homeworks">
} & { render(): Render[".md"] };
"hw_视觉计算和机器人学中的数据驱动方法_王偲哲_王轩禹.md": {
	id: "hw_视觉计算和机器人学中的数据驱动方法_王偲哲_王轩禹.md";
  slug: "hw_视觉计算和机器人学中的数据驱动方法_王偲哲_王轩禹";
  body: string;
  collection: "homeworks";
  data: InferEntrySchema<"homeworks">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
