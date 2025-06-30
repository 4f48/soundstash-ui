<script lang="ts">
	import { createForm } from "@tanstack/svelte-form";
	import { z } from "zod";
	import { Button, Card, Input, Label } from ".";

	const schema = z.object({
		email: z.string().nonempty("required").email("invalid email"),
		password: z.string().nonempty("required"),
	});

	const form = createForm(() => ({
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: ({ value }) => {
			console.debug(value);
		},
		validators: {
			onSubmit: schema,
		},
	}));
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Create your account</Card.Title>
		<Card.Description
			>Enter your email below to create an account.</Card.Description
		>
	</Card.Header>
	<form
		class="flex flex-col gap-2"
		onsubmit={(e) => {
			e.preventDefault();
			e.stopPropagation();
			form.handleSubmit();
		}}
	>
		<form.Field name="email">
			{#snippet children(field)}
				<div class="grid w-full items-center gap-1">
					<div class="flex items-center">
						<Label for={field.name}>Email</Label>
						<p class="flex-1 text-right text-sm text-destructive">
							{field.state.meta.errors[0]?.message}
						</p>
					</div>
					<Input
						aria-invalid={field.state.meta.errors.length > 0
							? "true"
							: undefined}
						name={field.name}
						id={field.name}
						value={field.state.value}
						oninput={(e) => field.handleChange(e.currentTarget.value)}
						placeholder="you@example.com"
						onblur={(e) => field.handleBlur()}
					/>
				</div>
			{/snippet}
		</form.Field>
		<form.Field name="password">
			{#snippet children(field)}
				<div class="grid w-full items-center gap-1">
					<div class="flex items-center">
						<Label for={field.name}>Password</Label>
						<p class="flex-1 text-right text-sm text-destructive">
							{field.state.meta.errors[0]?.message}
						</p>
					</div>
					<Input
						aria-invalid={field.state.meta.errors.length > 0
							? "true"
							: undefined}
						name={field.name}
						id={field.name}
						value={field.state.value}
						oninput={(e) => field.handleChange(e.currentTarget.value)}
						onblur={(e) => field.handleBlur()}
					/>
				</div>
			{/snippet}
		</form.Field>
		<Button class="w-full" type="submit">Sign Up</Button>
	</form>
</Card.Root>
