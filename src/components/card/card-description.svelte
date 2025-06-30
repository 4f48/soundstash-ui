<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "../../lib/utils";
	import type { ClassValue } from "clsx";

	type Props = {
		children: Snippet;
		class?: ClassValue;
	} & HTMLAttributes<HTMLDivElement>;
	const { children, class: className, ...props }: Props = $props();
</script>

<h1 class={cn("text-sm text-muted-foreground", className)} {...props}>
	{@render children()}
</h1>
