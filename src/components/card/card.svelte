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

<div
	class={cn(
		"bg-muted-background flex flex-col gap-2 border border-muted-foreground/50 p-3 rounded-md",
		className
	)}
	{...props}
>
	{@render children()}
</div>
