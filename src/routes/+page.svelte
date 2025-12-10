<script>
	import GitHub from '$lib/assets/github.svg';
	import Linkedin from '$lib/assets/linkedin.svg';
	import Email from '$lib/assets/mail.svg';

	let contactCards = [
		{ name: 'GitHub', icon: GitHub, href: 'https://github.com/zec-Wicks' }, // Github
		{ name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/zechariah-wicks/' }, // Linkedin
		{ name: 'Email', icon: Email, href: 'mailto:contact@zecwicks.com' } // Email
		// { icon: '', href: '' },
	];
</script>

<main class="body">
	<div class="header">
		<h1>
			Hi! I'm
			{#each 'Zechariah Wicks'.split('') as char}
				<span>{char}</span>
			{/each}
		</h1>
		<h2>Software Engineer and Cybersecurity Specialist</h2>
	</div>
	<div class="contactSection">
		<p>Reach Out</p>
		<div class="contactCards">
			{#each contactCards as card}
				<a class="card" href={card.href} target="_blank" rel="noopener noreferrer">
					<img class="icon" src={card.icon} alt="" />
				</a>
			{/each}
		</div>
	</div>
</main>

<style>
	:global(body) {
		font-family: 'Courier New', Courier, monospace;
		color: #ffffff;
		background-color: black;
		margin: 0;
		padding: 0;
		height: 100vh;
		height: 100dvh;
		width: 100vw;
		overflow: hidden;
	}
	.body {
		min-height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.header {
		text-align: center;
	}
	.header span {
		transition: color 0.3s ease;
		color: var(--white);
	}
	.header span:hover {
		color: #9400d3;
	}
	.contactSection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 600px;
		width: 100%;
	}
	.contactCards {
		display: flex;
		flex-direction: row;
		gap: 2em;
	}

	.icon {
		height: 5em;
		width: 5em;
		fill: #ffffff;
		position: relative;
		z-index: 3;
	}

	.card {
		padding: 1em;
		border-radius: 1em;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		position: relative;
		overflow: hidden;
		transition: transform 0.3s ease;
		background-color: transparent;
		border: 2px solid transparent;
	}
	.card:hover {
		background-color: initial;
	}

	/* RAINBOW CARD CSS */
	.card::before {
		content: '';
		position: absolute;
		top: -150%;
		left: -150%;
		width: 400%;
		height: 400%;

		background: conic-gradient(
			#ff0000,
			#ff7f00,
			#ffff00,
			#00ff00,
			#0000ff,
			#4b0082,
			#9400d3,
			#ff0000
		);
		z-index: 0;
		opacity: 0;
		transition: opacity 0.3s ease;
		animation: rotate 6s linear infinite;
	}

	.card:hover::before {
		opacity: 1;
	}

	.card::after {
		content: '';
		position: absolute;
		top: 1.5px;
		left: 1.5px;
		right: 1.5px;
		bottom: 1.5px;

		background-color: black;
		border-radius: 0.9em;
		z-index: 2;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.icon {
		height: 5em;
	}

	@media (max-width: 768px) {
		:global(body) {
			/* height: auto; */
			/* min-height: 100vh; */
			overflow-y: auto;
		}

		.contactCards {
			/* 1. Stack cards vertically */
			flex-direction: column;
			width: 100%;
		}

		/* 2. Make font smaller */
		h1 {
			font-size: 1.5em;
		}
		h2 {
			font-size: 1em;
		}

		/* Optional: Make icons slightly smaller on mobile so they stack nicer */
		.icon {
			height: 4em;
			width: 4em;
		}
	}
</style>
