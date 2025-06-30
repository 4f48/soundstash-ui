<script lang="ts">
	import type { ClassValue } from "clsx";
	import type { HTMLAttributes, HTMLInputAttributes } from "svelte/elements";
	import { cn } from "../lib/utils";

	type Props = {
		class?: ClassValue;
	} & HTMLInputAttributes;
	const { class: className, ...props }: Props = $props();
</script>

<input
	class={cn(
		"border aria-[invalid=true]:bg-destructive/30 aria-[invalid=true]:focus:ring-destructive/75! border-foreground placeholder:text-muted-foreground/80 rounded-sm disabled:border-foreground/50 focus:outline-none h-8 px-3 text-sm focus-visible:ring-2.5 focus-visible:ring-foreground/50",
		className
	)}
	{...props}
/>
