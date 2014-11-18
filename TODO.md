= Todo =

== Responsible persons ==
=== Search component ===
Tom

=== Videolyrics component + lyrics component ===
Leo

=== Video component ===
Jeroen

=== Back-end component ===
Kevin

== Components ==
=== Search component ===
De zoekbalk stuurt een query naar MusiXMatch.
De resultaten daarvan worden weergegeven in de search results.
Deze linkt vervolgens naar een videolyrics pagina.
	* search
		* MusiXMatch API
	* search results
	    * MusiXMatch API

=== Videolyrics component + lyrics component ===
De videolyrics pagina bestaat uit een lyrics component en een video component.
De lyrics component haalt lyrics op van de MusiXMatch API.
	* videolyrics
		* video + lyrics
	* lyrics

=== Video component ===
De videocomponent haalt een video op van YouTube.
	* video
		* YouTube API
	* MusiXMatch API (lyrics)

=== Back-end component ===
De back-end verwerkt ratings en kan resultaten terugsturen.
    * front-end rating system
	* back-end (rating system)