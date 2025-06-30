<script lang="ts">
	import { Label } from "bits-ui";
	import type { ClassValue } from "clsx";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "../lib/utils";

	type Props = {
		children: Snippet;
		class?: ClassValue;
	} & Label.RootProps;
	const { children, class: className, ...props }: Props = $props();
</script>

<Label.Root class={cn("text-sm", className)} {...props}
	>{@render children()}</Label.Root
>
