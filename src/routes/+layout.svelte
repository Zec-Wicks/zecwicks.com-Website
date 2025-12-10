<script>
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Zechariah Wicks</title>
	<meta
		name="description"
		content="Zechariah Wicks, a Software Engineer and Cybersecurity Specialist. Find my projects and contact information here."
	/>
	<meta property="og:title" content="Zechariah Wicks | Engineer & Cyber Specialist" />
</svelte:head>

{@render children()}
