<script lang="ts">
	import { Dialog } from "bits-ui";
	import Button from "./button.svelte";
	import { Card } from ".";
	import Input from "./input.svelte";
	import { fade, scale } from "svelte/transition";
	import Label from "./label.svelte";

	let dialogOpen = $state(false);
</script>

<Button onclick={() => (dialogOpen = true)}>Create playlist</Button>
<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Portal>
		<Dialog.Overlay forceMount>
			{#snippet child({ props, open })}
				{#if open}
					<div
						class="fixed inset-0 z-50 bg-background/80"
						{...props}
						transition:fade={{ duration: 100 }}
					></div>
				{/if}
			{/snippet}
		</Dialog.Overlay>
		<Dialog.Content
			class="fixed w-full h-full top-0 left-0 z-50 flex items-center justify-center"
			forceMount
		>
			{#snippet child({ props, open })}
				{#if open}
					<div
						{...props}
						transition:scale={{
							duration: 100,
							start: 0.95,
						}}
					>
						<div transition:fade={{ duration: 150 }}>
							<Card.Root class="w-md">
								<Card.Header>
									<Card.Title>Create playlist</Card.Title>
									<Card.Description
										>Let's name your new playlist.</Card.Description
									>
								</Card.Header>
								<div class="grid w-full items-center gap-1">
									<Label for="pname">Name</Label>
									<Input
										id="pname"
										name="pname"
										placeholder="New Playlist #1"
									/>
								</div>
								<Button onclick={() => (dialogOpen = false)}>Create</Button>
							</Card.Root>
						</div>
					</div>
				{/if}
			{/snippet}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
