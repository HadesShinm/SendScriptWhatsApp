async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

	FADE IN

	on the words CZECH AIRLINE.  We are panning across the words
	on the side of the plane.

	INT. AIRPLANE

	ANGLE DOWN

	on a tray table.  Crumpled Czech bills and coins are on it. 
	Hands are counting the money.  The airline hostess announces
	the arrival at JFK - in CZECH.  A hand reaches into a breast
	pocket - pulling out two passports.  One is opened.  Belongs
	to EMIL SLOVAK.  The next passport belongs to OLEG RAZGUL. 
	The hand passes the Oleg Razgul passport to the man next to
	him.  We notice several empty airline bottles of vodka and a
	small disposable camera on Oleg's tray table.  The passport
	is set down.  Oleg picks it up.  We hear Emil's voice in
	CZECH.  The scene is subtitled in ENGLISH.

				EMIL (V.O.)
		Just do what I do.  Say the same thing I
		say.  Don't open your mouth.

				OLEG (V.O.)
		Okay.

	INT. PASSPORT CONTROL - KENNEDY AIRPORT - DAY

	CAMERA DOLLIES down a long line of passengers.  They are
	split into two lines - one for Americans, the other for
	visitors.  CAMERA finally arrives at EMIL SLOVAK.  An
	unshaven Czech in his mid-30's.  Tall, scraggly beard. 
	Piercing blue eyes.  He's dressed in an outdated suit.  His
	eyes are alert, cunning and smart.

	OLEG RAZGUL, stands in line behind Emil.  Oleg is big.  Not
	tall - but wide.  A wrestler's body.  Emil looks at Oleg. 
	(The following is in CZECH and subtitled in ENGLISH.)

				EMIL
		Don't fool around.

				OLEG
		Okay.

	Oleg holds up his disposable camera - at arms length - to
	take a picture of himself.

				EMIL
		Did you hear what I said?

				OLEG
		I want to document my trip to America.

				IMMIGRATION OFFICER
		Next.
			(Emil steps up)
		Could I see your documents, please?

				EMIL
		Yes sir.

	He hands the passport to the officer who runs it through an
	image swipe.  Emil glances furtively back to Oleg.

				IMMIGRATION OFFICER
		What is your intended purpose of your
		visit to the United States?

				EMIL
		Two weeks holiday.

				IMMIGRATION OFFICER
		How much money are you carrying with
		you?

				EMIL
		I have five-hundred dollars.

				IMMIGRATION OFFICER
		Can you show me?  Sir, no cameras in the
		FIS area!

	Oleg was about to take a picture of Emil and the Immigration
	Officer.  Oleg puts the camera away.  Smiles sheepishly.

				IMMIGRATION OFFICER (CONT'D)
			(to Emil)
		Is he with you?  Are you travelling
		together?

				EMIL
		Yes.

				IMMIGRATION OFFICER
		Please join us.
			(to Oleg)
		Come on forward.

				EMIL
		Is there a problem?

				IMMIGRATION OFFICER
		No, you're travelling together.  I want
		to talk to you together.  Hi, how are
		you?  Can I take a look at your
		documents?
			(takes Oleg's passport)
		Are you related?

				OLEG
		Yes...he's my friend.

				IMMIGRATION OFFICER
		Okay.  You're a Czech national and
		you're a Russian national.  How do you
		know one another?

	Oleg starts to speak, but Emil cuts him off.

				EMIL
		We are both from Prague.

				IMMIGRATION OFFICER
			(to Oleg)
		How long are you planning to stay?

				EMIL
		Two weeks.

				IMMIGRATION OFFICER
		I'd like to speak for himself, okay?

				EMIL
		He doesn't speak English.

				OLEG
		I speak English.

				IMMIGRATION OFFICER
			(to Oleg)
		Then answer my questions.  Where were
		you planning to stay during the two
		weeks that you're here?

				OLEG
		New York.

				IMMIGRATION OFFICER
		Yes, we're in New York now.  But where
		are you planning to stay in New York?

				OLEG
		A cheap hotel.

				IMMIGRATION OFFICER
		What are you coming here to do?

				OLEG
		I'm here for movies.

				IMMIGRATION OFFICER
		Movies...to be in the movies or to see
		movies?

				OLEG
		Yes.  No.  Both.  When I was a boy, I
		see movie at school called "It's a
		Wonderful Life" directed by Frank Capra. 
		Ever since I want to come to America. 
		Land of the free.  Home of the brave.  A
		land where anyone can be anything. As
		long as they are white.

				IMMIGRATION OFFICER
		Excuse me?

				EMIL
		He made joke, bad joke.  First time on
		airplane...

	The SUPERVISOR comes over to see what the problem is:

				IMMIGRATION OFFICER
		Well, they've got valid visas, but they
		don't have much money.  Uh... and I'm
		not...uh, I think there's a possibility
		they may be coming to live and reside.

				SUPERVISOR
		Look how long the line is.  We gotta
		move 'em out.  I'll take them down to
		secondary.

	Emil looks at Oleg, pissed.

	INT. P.B. HERMAN'S RESTAURANT - DAY

	The place is empty except for one table at the end of the
	bar.  EDDIE FLEMMING, Manhattan's most famous detective, and
	his savvy, black partner, LEON JACKSON are having cocktails. 
	Eddie is smoothly handsome, tough, smart and tired.  Not only
	is he the best homicide detective Manhattan has ever seen,
	he's continually mentioned in New York columns and has been
	the subject of several magazine articles.  There's even been
	a TV movie about one of his biggest cases.  Leon has been
	with Eddie a long time and was also featured in the TV movie.

	Sitting with Eddie and Leon is ROBERT HAWKINS, host and star
	reporter for the tabloid show, "Top Story."  Hawkins is also
	the best in the business and has dealt with them all: Joey
	Buttafuco and Amy Fisher, Lorena Bobbit and OJ.

	Wait staff bustles in the b.g. doing the morning set up. 
	Hawkins listens as Eddie, cigar in hand, finishes a "war
	story" and a vodka tonic at the same time.

				EDDIE
		So we're waitin' to hit this warrant -
		we got Emergency Service with the heavy
		weapons standin' by - ready to go.  I
		say, lemme get a cigar outta the car.  I
		go to get the cigar and BOOM!  All the
		sudden I turn around and a kid with a
		shotgun let one go.  Right where I was
		standin'.  That coulda been it.  I
		coulda had my head blown off and for
		what?  Some stupid kid got panicky,
		takes the safety off and it's over.  If
		I hadn't gone back for that cigar - for
		a bad habit - I would've had my head
		blown off.

				HAWKINS
		Jesus Christ.

	PAULIE, the owner, walks up.

				PAULIE
		Speakin' of bad habits, everybody okay?

				HAWKINS
		Another martini.

				LEON
		Coffee for me, I gotta slow down.

				EDDIE
		Vodka tonic.

				LEON
			(rethinks it)
		Maybe you could just put in a shot of
		Martell?

	Paulie takes the drinks off the table and an empty bottle of
	vodka.

				LEON (CONT'D)
			(of Eddie's story)
		It was freaky, I'll tell you.  Stupid
		kid.

				EDDIE
		What's the kid gonna say - sorry? 
		Meanwhile I'm not here anymore. 
		Like last week - we were at the morgue
		and this guy was all chopped up - spleen
		here - liver there - his heart in a pan. 
		Six hours ago this guy was walkin' his
		dog or buyin' a quart of milk.  Who
		knows?  But some kid's robbed him for $3
		or some shit and shot him and now you
		can't tell if he's a piece of beef or a
		human being and I'm thinkin' that's me. 
		Sooner or later.  That's me.  

				HAWKINS
		Sooner or later that's everybody.  

				EDDIE
		Not chopped up.  Not chopped up like
		that.  I mean, what do I got left? 
		Coupla articles.  A medal or two. 
		Plaque here and there and in a coupla
		years no one remembers me anymore.

				HAWKINS
		I think you're getting a little moody
		there, Eddie.

				EDDIE
		I'm not moody.

	Hawkins and Leon share a look.

				HAWKINS
		Isn't he a little moody?

				LEON
		Of course he's moody.  He thinks he's in
		love.

				HAWKINS
		In love?  With who?

	Paulie delivers the drinks and sets some cigars on the table. 
	Takes a seat next to Eddie.  Eddie asks Hawkins.

				EDDIE
		How old are your kids?

				HAWKINS
		My kids?  Let's see...Susan's 15. 
		Aundrea's 9.  Don't tell me you're
		thinking about having a kid!  How old
		are you?  Never mind. 
		Let me just tell you this: Every stupid
		cliche you hear about kids - they change
		your life, they make you a better
		person, they make you whole...
			(beat)
		It's all true!  Before I had kids when
		friends talked about their kids, I
		wanted to vomit.  Now -- I get it.  Am I
		right, Leon?

				LEON
		Absomotherfuckin'lutely.  You can have
		all three of my ex-wives.  But somebody
		so much as looks sideways at my four
		girls -- I'd kill 'em.  
			(takes out his wallet)
		You haven't seen my youngest have you?

	As he hands pictures to Hawkins his cell phone rings.

				LEON (CONT'D)
		Yeah?

				HAWKINS
		Paulie, you've got kids, right?

				PAULIE
		My kids don't talk to me anymore but
		they were great when they were young.

				LEON
			(into the phone)
		Sure it's him?  Great!
			(collapses the phone)
		Unique's home.

	They all rise from the table.

				EDDIE
		Paulie, I need the cure.

				PAULIE
		Step into my office.

	Leon and Hawkins sit back down as Eddie and Paulie leave.

				HAWKINS
		So you got your kids listening to Opera? 
		You still singing in the church on the
		weekends?

	INT. SECONDARY IMMIGRATION OFFICE - DAY

	Now other officers are questioning Emil and Oleg.  They've
	been there a while.  The SECONDARY OFFICER is looking Oleg.

				SECONDARY OFFICER
		Okay.  You work in a vodka factory.  I
		understand that.
			(to Emil)
		And what kind of work do you do?

				EMIL
		I am butcher.

				SECONDARY OFFICER
		You're a butcher?  What do you use pig
		intestines for?

				EMIL
		You stuff sausage in it.

				SECONDARY OFFICER
		And what do you do with the bones?

				EMIL
		Dog food.

	Emil looks at Oleg.  Blaming his stupid responses at Passport
	Control for their detainment.

				SECONDARY OFFICER
		Are you married?

				EMIL
		No.  Are you proposing?

	ANGLE UP

	through a thousand ICE CUBES.  A face plunges towards us...

	INT. MENS ROOM

	Eddie has his back to us as he dunks his face into a sink
	full of ice.  He dries his face, looks into his bloodshot
	eyes.  Presents a small black ring box to the mirror.

				EDDIE
		Will you marry me?  Wanna get married? 
		What are you doin' Saturday?

	Leon enters.  Eddie turns.

				EDDIE (CONT'D)
		I'm gonna propose.

				LEON
		When?

				EDDIE
		Tomorrow.  At lunch.

				LEON
		You ready?

	Eddie leans back and drops some Visine in his eyes.  Turns.

				EDDIE
		The thrill of the hunt.  I love it.

	EXT. TIMES SQUARE - DAY

	Oleg and Emil stare at the bright lights - all the nonstop
	action.  Each stands with an old suitcase.

				OLEG
			(in Russian)
		Look.  Times Square.  Just like in the
		movies!

				EMIL
			(in Czech)
		Don't speak Russian!

				OLEG
			(in Russian)
		Why?  Why do I always have to speak to
		you in Czech?

				EMIL
			(in Czech)
		Because I don't like your ugly language. 
		I heard enough of it in school!  Now
		speak Czech or English.  And don't fool
		around anymore.  You almost got us
		thrown out!

	Emil pulls out an envelope with Milos' address on it.  This
	is who they came to see.  Emil hails a CAB.  Oleg is staring
	inside a camera store - at himself on a monitor.  A
	videocamera's pointed out in the street.

				OLEG
		Look.  New videocameras.  Color
		viewfinder.  Image stabilization. 
		Solarization.  Night vision.

				EMIL
		We have no money.  Come on.

	Oleg stares at the videocamera - dying to have one like this. 
	Emil slides into the cab.

				CABBIE
		Where you wanna go, buddy?

	Emil pulls out the post-marked envelope.  Points to the
	return address on it and passes it through the slot to the
	Cabbie.

				EMIL
		Here.

	Emil looks out the window - no sign of Oleg.  Then, Oleg
	hurries out the camera store, gripping something inside his
	coat.  He flings both suitcases in the trunk, SLAMS it shut 
	and jumps in the back seat.  He opens his jacket - pulling
	out the VIDEOCAMERA he just stole.

				EMIL (CONT'D)
		Go!

	Oleg smiles sheepishly at Emil.
		

	EXT. SPANISH HARLEM - DAY

	Eddie's car pulls up.  Eddie, Leon and Hawkins get out.

				HAWKINS
		So what's unique?

				EDDIE
		Not what.  Who.

	Eddie passes Hawkins a Polaroid - of a woman on a bed -
	covered in blood.

				EDDIE (CONT'D)
		He's from Antigua.  His girlfriend was
		taking too long to put her make-up on. 
		they were late for a party.  Stabbed her
		with a beer bottle.

				HAWKINS
		That's unique.

				EDDIE
		Yeah.  And he still went to the party.

	Leon moves to a LOOKOUT - gives him a twenty.

				LOOKOUT
		Top floor.  Back room.

				EDDIE
		Yeah.  I make big cases, they make the
		news and I look good.  But the problem
		with becoming a star is downtown.  They
		shoot at stars.  Now be quiet.  Shhh.

	As they reach the doorway - Eddie surprises two crackheads. 
	Waves them off.  They hurry away.

				EDDIE (CONT'D)
		I hope this prick doesn't run.  My knees
		are killing me.  Stay behind me.

				HAWKINS
		You're worried for my safety.  I'm
		touched.

	Eddie flattens against the building - watches Unique descend
	the fire escape.

				HAWKINS (CONT'D)
		Ready?

				EDDIE
		Keep them out of my way.

				HAWKINS
		Okay.  You ready?

				EDDIE
		Yeah, yeah.  Jesus.

	Eddie closes in.

				HAWKINS
			(into his cell phone)
		COME ON!  COME ON!  YOU FUCKING GUYS,
		LET'S MOVE IT!

	Unique is climbing down the fire escape - before he gets to
	the bottom, Leon bursts through a door behind him and kicks
	the fire escape, sending Unique flying into the alley.  Where
	he lands dropping his gun.

	Eddie pulls him off the ground as Leon scoops the gun up.

				EDDIE
		What's your rush?  Going to a party?

				UNIQUE
		Why you chasin' me, man?

				EDDIE
		I don't know.  You always come outta
		your house that way?

				UNIQUE
		It's not my house, man.  I don't live
		here.

				EDDIE
		Well, sounds like burglary to me.

	Leon cuffs Unique who recognizes Eddie.

				UNIQUE
		I know you man.

	An unmarked van comes tearing into the scene.  Disgorges a
	mini-cam team that starts filming but they missed the bust.

				HAWKINS
			(to Eddie)
		Any chance we can do that again?

				EDDIE
		Again?  I didn't wanna do it the first
		time.
						

	EXT. EAST SIDE - LATE DAY

	The cab is in front of an old five-story brownstone.  Oleg
	gets the bags out of the trunk as Emil tucks the envelope
	into his jacket, then steps up to the old building.  He looks
	back at Oleg - who's VIDEOTAPING him.

				EMIL
		Turn that off!  Get the bags.

				OLEG
		Why should I carry your bag?  I am not a
		dog.

				EMIL
		For five years I paid for your
		stupidness - you'll carry my bag for the
		rest of my life if I say so.
			(challenging)
		Unless you refuse, Oleg.

	Oleg looks at Emil.  Even though Oleg is stronger than Emil,
	he fears him.  He picks up both bags.  Emil searches the
	occupant list over the buzzers to the apartment building.

				EMIL (CONT'D)
		There.  5RW.

	Emil pushes ten of the buzzers except 5RW.  A BUZZER clicks
	and Emil pushes it open.

	INT. MILOS' APARTMENT BUILDING - STAIRWELL - DAY

	The brownstone has no elevator so Emil and Oleg climb the
	stairs... Oleg cradling his camera.  Emil notices a crack
	pipe on the floor and picks it up.  Smells the bowl.

				OLEG
		What?

				EMIL
		Smell like chemicals...for smoking
		drugs.

	Emil pockets the pipe and climbs to the top floor, moving
	down the dirty hallway to a corner door.

	INT. MILOS' APARTMENT BUILDING - HALLWAY - DAY

	He KNOCKS...FOOTSTEPS approach.  The door is opened by MILOS -
	a 40-year-old Czech, dressed in stained plumbers overalls. 
	He  is surprised to see Emil and Oleg in his doorway.  Oleg
	films him...

				MILOS
		Emil???!

				EMIL
		Surprise!  Surprise!

	Milos shoots a look across the tiny kitchen to TAMINA, his
	comely wife.

	INT. MILOS' APARTMENT - CONTINUOUS

	Emil pushes his way inside.  Oleg follows.  Milos wears
	plumbers overalls but Emil notices sports a Rolex.  Tamina
	has on a faded dress but despite their cheaply furnished
	apartment she wears an expensive brushed gold necklace,
	bracelet and big pearl earrings.  The room is furnished with
	kitsch from Disney World and Las Vegas.  The only anomaly is
	a HUGE SONY TRINITRON HOME ENTERTAINMENT CENTER.  (The
	following is in Czech and subtitled in English.)

				EMIL
		Your sister said she didn't know where
		you were so you shouldn't write to her
		with return address if you're hiding. 

				MILOS
		Did you hurt her?

				EMIL
		You know me...I never hurt anybody. 
		Where's the money?

				OLEG
		Hello, Tamina.

	Oleg is looking Tamina over.  Milos - though scared - barks
	at Oleg.

				MILOS
		Take your eyes off her, Oleg!
			(to Emil)
		Look.  It wasn't my fault you two were
		caught.
			(of Oleg)
		It's his fault.  Trying to get the bank
		clerk's phone number?!  I wasn't going
		to wait!!!

				EMIL
		Milos.  Get my money!

	Oleg videotapes the scene.

	CLOSE ON AN AJAR DOOR

	All we see behind it is a WOMAN'S FACE and her wet hair - she
	obviously came from the shower and we see the towel wrapped
	around her.

				MILOS
			(nervously)
		We spent it!

				EMIL
		Ha. Ha.

				MILOS
		Look at the way we live.  I'm a plumber. 
		You think I'd be working if I had
		money?!

	Emil, pissed, moves to a wood block and pulls out a KITCHEN
	KNIFE.  He grabs Tamina roughly, putting the blade to her
	throat.

				MILOS (CONT'D)
		Emil.  Put down the knife.

	Milos looks at his wife - who is terrified.

				MILOS (CONT'D)
		Emil.  I'll help you.

	Milos closes the gap between him and Emil - trying to calm
	him by talking softly.

				MILOS (CONT'D)
		I can get you a job.

				EMIL
		A job?

				MILOS
		Yes, the money is good.

				EMIL
		As a plumber?!

				MILOS
		It's easy to learn.

				EMIL
		A job??  As a plumber???  You think I
		come to America to work!

				MILOS
		We started over, you can too.

				EMIL
			(furious)
		You spent all the money while I was in
		prison?  Now you tell me to get a job
		fixing toilets?!?

	Emil pulls the knife away from Tamina - then angrily PLUNGES
	it toward Milos' chest!

	Oleg videotapes it.  Then lowers the camera - shocked that
	Emil killed Milos.

	Blood sprays Tamina's face.  She tries to run but Oleg grabs
	her, not noticing her brushed gold bracelet falls to the
	floor.  He covers her mouth as he points the videocamera at
	Emil who STABS Tamina - absolutely enraged!

	THE WOMAN BEHIND THE DOOR

	flees...Emil hears NOISE in the bedroom - a window opening. 
	Emil kicks the bedroom door open.  Sees the window leading to
	the fire escape.  He dashes to it.  Sees four flights down -
	the WOMAN, wearing a summer dress.  Barefoot.  Her hair still
	wet.  

	She looks up.  She is beautiful and terrified.  She runs
	down the alley.

				EMIL (CONT'D)
		She saw!

	Emil hurries toward the bathroom.  She just got out of the
	shower.  Her underwear and purse are draped over a chair. 
	Emil grabs the purse.  Finds a CZECHOSLOVAKIAN PASSPORT.  He
	opens the cover, stares at her photo and name.

				EMIL (CONT'D)
		Daphne Hanlova.

	There's one stamp in the passport - from the U.S. when she
	arrived - June 16, 1998.  Underneath is written - 6 MONTH
	STAY.  Emil flips through the rest of the passport - all
	blank pages.

				EMIL (CONT'D)
		Six month visa.  Still here two years
		later.  They'll deport her if she goes
		to Police.

	Emil pockets Daphne's passport and wallet, scoops up her
	shoes and jacket - enters the kitchen and dumps them on the
	floor.  He tears through the kitchen cabinets, throwing cans
	and bottles aside.

				OLEG
		What are you looking for?

	Emil finds nail polish remover - looks at the bodies.

				EMIL
		I'm going to make a bohemian barbecue.

	Emil draws the kitchen curtains plunging the room into
	darkness.
		
		EXT. CENTRAL PARK - NIGHT

	A face comes from the darkness.  It's an athletically
	handsome man, jogging out of a tunnel towards us.  He's in a
	tie and jacket in Central Park at NIGHT. 
	He is JORDAN (JORDY) WARSAW.  A sensitive man of rugged
	honesty.  He runs down the hill in a hurry.  A MUGGER steps
	in his path.

				MUGGER
		Got any spare change?  How 'bout a spare
		twenty?

				JORDY
		Look, I don't have time for you, get out
		of my way!!

				MUGGER
		Alright, how 'bout all your fuckin'
		money?

	The Mugger pulls a knife - and in a whirl of movement, Jordy
	grabs his wrist and disarms him in a deadly, professional
	manner - hurling him down to the pavement, twisting his arm
	behind his back.  With his other hand, Jordy whips out a
	BROWNING 9MM from his shoulder holster and places it behind
	the mugger's head.  Jordy displays his shield.

				JORDY
		Okay, you're under arrest!  Now you
		happy?

				MUGGER
		Fire Department?  Firemen don't carry
		guns.

				JORDY
		Oh yeah?  Guess again.

	Jordy handcuffs the Mugger and searches the Mugger's coat
	pockets - pulling out a handful of driver's licenses and
	credit cards.

				JORDY (CONT'D)
		Nice - how many people you ripped off
		tonight?!  Get up!

	As Jordy yanks the Mugger to his feet, his BEEPER goes off.

				JORDY (CONT'D)
		You couldn't listen to me, could you?

	Jordy drags the Mugger to a tree.  Cuffs him so his face is
	pressed up against the bark.

				JORDY (CONT'D)
		I'll send a cop back for you.

				MUGGER
		Hey.  C'mon, you can't leave me like
		this.  Some freak'll come by and stab
		me!

	Jordy jogs off across the park.

				MUGGER (CONT'D)
		Wait!  Come back!!

	EXT. MILOS' APARTMENT - NIGHT

	FIRE TRUCKS from three battalions.  Radios CRACKLE.  There's
	a crowd growing.  Jordy pushes his way through.  The top
	floor of the brownstone where Milos and Tamina lived has been
	reduced to smoking ruins.  The trees are covered in debris
	and soot.  Jordy moves to LOUIE - Battalion Chief.

				LOUIE
		Lieutenant - take up your line and
		relieve Ladder Company 60 on the top
		floor.

				JORDY
		Hey, Louie, were you first due?

				LOUIE
		Yeah, I radioed you guys right away
		'cause you got two roasts on the top
		floor but you don't hafta investigate
		cause homicide is up there.

				JORDY
		Homicide?  Who let them up?  I didn't
		make it a crime scene yet.

				LOUIE
		Hey, it's Eddie Flemming.

				KORFIN (O.S.)
		Yo, Jordy!

	BOBBY KORFIN - an overweight arson investigator with a quick
	with and good sense of humor - comes over, pulling on a
	turnout coat.

				KORFIN (CONT'D)
		Where you been, man?  We got a
		celebrity!

				JORDY
		I heard.  Who the hell let them up
		there?

				KORFIN
		I don't know, you think Eddie will give
		me his autograph?

				JORDY
		You see anything in the crowd?  Anybody
		suspicious?

				KORFIN
		Naw - I'm sure the suspect's not here.

				JORDY
		Oh yeah, why?

				KORFIN
		'Cause Eddie woulda locked him up by
		now!

	INT. MILOS' APARTMENT - NIGHT

	The roof is gone.  The sky is exposed.  It's charred ruins,
	smoked beams and watery muck.  Eddie and Leon are standing by
	what's left of the mattress, looking at Milos and Tamina's
	charred bodies.  Eddie grips a half-smoked Cuban cigar,
	listening to Leon.

				LEON
		So, it looks to me - from the sixty-nine
		position - that they were doin' each
		other but were so whacked out of their
		heads they set the pipe on the mattress,
		lit it up, and they got fried.  What do
		you think, Eddie?

	Jordy enters - with Korfin who's carrying a paint can.

				EDDIE
		I don't know.  We got the experts here. 
		Show them what you found - I hope you
		don't mind, we came over to see if we
		could help.

	Korfin makes a beeline for Eddie - wanting to meet the
	celebrity.

				KORFIN
		Nah, not at all.  Detective Flemming -
		Bobby Korfin.  My Uncle Tony worked with
		you at 2-1 back when you were a rookie.

				JORDY
		Could you put out the cigar?  Part of
		the job is picking up scents.

				EDDIE
		Oh, sure.

	Eddie puts his cigar out.  Carefully slides it into a cigar
	holder and pockets it to finish later.

				LEON
		Well, I found - check it out - crack
		pipe.  Looks like they got careless.

	Leon displays the pipe Emil found on the stairs.  Korfin
	shines the flashlight on Leon to look at the pipe.

				LEON (CONT'D)
		Mind not shining that light in my eyes?

				KORFIN
		Sorry, bro.

				JORDY
		Hey, that's great you guys got it all
		wrapped up, but you don't mind if we go
		through the routine?  It gives us
		somethin' to do.

				EDDIE
		No, we don't mind.  You mind Leon?

				LEON
		No.  Go ahead.

				JORDY
		Thanks.  Appreciate it.

	Jordy throws a look at Korfin.  Homicide detectives have no
	respect for fire marshals' investigative skills.  Eddie
	rummages through the apartment - moving into the kitchen and
	living room... Leon watches as Korfin sticks a pencil in a
	charred beam, measuring how deep in it goes.

				KORFIN
		Okay, Jordy - it was a fast fire, we got
		good patterns - about thirty minutes
		old.

	Jordy moves to one of the corpses.  He pulls on a white
	rubber glove.  Inserts his finger in the corpses mouth.  The
	glove comes out white.

				JORDY
		Mouth's clean, too.

				KORFIN
		Clean?

				JORDY
		Don't blow your nose!

	Jordy's looking at Leon, who was just about to blow his nose.

				JORDY (CONT'D)
		The smoke'll permeate your nostrils -
		burn 'em out.  Let it run.

				KORFIN
		But you knew that, right?

	Leon looks at Jordy, then lowers the handkerchief.  Jordy
	turns back to the corpses on the bed.  Eddie - in the other
	room - has found Tamina's brushed gold bracelet on the floor.

				JORDY
		So the way you see it, two crack heads
		burned themselves up?

				LEON
		That's what it looks like to me.

				JORDY
		And while they're burning up, they're
		still goin' down on each other?  You got
		to hand it to them.

				LEON
			(realizes he's wrong - blows it
			 off)
		Yeah, well, some people got their
		priorities straight.

	Leon watches Jordy, quietly.  With a pair of tweezers, Jordy
	pulls a small unburned piece of cloth from behind one of the
	heads.  Korfin supplies the paint can.  Jordy drops the cloth
	inside.

				LEON (CONT'D)
		What was that?

				JORDY
		Evidence.  Of a homicide.

	That got Eddie's attention and he comes back to the bedroom.

				JORDY (CONT'D)
		You know what that is, right?

				EDDIE
		No, what is it?

				JORDY
		Why don't you explain it, Bobby.
			(to a fireman joking a wall)
		Hey Camello!  You mind punching a hole
		in the floor?

				CAMELLO
		No problem.
			(to Eddie and Leon)
		Excuse me, gentlemen.  You might wanna
		back up a little more.  Don't wanna get
		your pants wet.

	Leon and Eddie move to higher ground - on top of a burnt TV
	set.  Eddie hands the brushed bracelet to Leon.  As Camello
	hacks at the floor with an ax, Jordy continues to examine the
	bodies and Korfin explains:

				KORFIN
		They have not soot in their mouths,
		which means they weren't breathin'
		before the fire and that usually means
		they were deceased - and this piece of
		cloth that my partner found means they
		were wrapped up in something, probably
		doused with a flammable liquid and
		positioned like this on the bed.  To the
		untrained eye, it looks like an
		accident.

	Jordy kicks around the draining floor, reaches down for
	something.

				LEON
		What's he looking for?

				EDDIE
		A timer.

	Jordy finds some wires attached to an outlet, pulls them up -
	on the other end is a timer.  Korfin takes the timer from
	Jordy and moves to Eddie.

				KORFIN
		Here you go.  A big double homicide.

	EXT. MILOS' APARTMENT BUILDING - NIGHT

	As Jordy and Korfin exit the brownstone, a CAMERA CREW is
	arriving.  Jumps out. 
	Korfin and Jordy cross toward Korfin's car.  They open the
	trunk.  Take off their muddy boots throwing them in.

				KORFIN
		You see Eddie's face when I gave him the
		timer?  Wish I had a picture of it.

				JORDY
		He knew all along.

				KORFIN
		What??

				JORDY
		That's why he was so quiet.  He was
		testing us.

	Eddie and Leon exit - Eddie carrying a baggie with a timer
	inside.  NICOLETTE KARAS, young and attractive, pushes her
	microphone at Eddie.  She's smart, aggressive and respected
	by her peers.

				NICOLETTE
		Detective, does it look like a murder?

				EDDIE
		We don't know that yet.  It's much too
		early.  There's a lot to be done.

				NICOLETTE
		How many victims are up there?

				EDDIE
		There are two bodies found at this
		point.

				NICOLETTE
		Can we go up to the crime scene?

				EDDIE
		You know you can't do that.  C'mon.

				NICOLETTE
		Is it drug related?

				EDDIE
		We don't know.  When I have more I'll
		let you know.

	Nicolette signals for her camera man, MIKE, to zoom in on
	Eddie's hand.  She barrels on...

				NICOLETTE
		Detective...what's that you're holding
		in your hand?  Evidence?

	Mike pans up to Eddie's face.  Other reporters arrive,
	hurling questions which Eddie easily answers.  Cameras flash
	as we PAN BACK TO Korfin and Jordy.  Jordy is about to get in
	the car as he notices, back behind some construction - DAPHNE
	HANDLOVA.  She's still wearing the crumpled summer dress. 
	She tentatively steps out to signal Jordy.  He only catches a
	glimpse of her.  He starts toward her -- knifes through the
	crowd - but Daphne is gone.

				KORFIN
		What?

				JORDY
		There was a woman - I think she wanted
		to talk to us.  She looked scared.  Oh
		shit!  Oh no!

	EXT. CENTRAL PARK - LATER

	Korfin's car SCREECHES to a stop.  Jordy leaps out. 
	Suddenly, Jordy stops...the Mugger handcuffed to the tree is
	now NAKED!

				MUGGER
		You motherfuckin' bastard!  She stripped
		me!  It was a bag lady!  She touched me
		all over, it was disgusting.

	Jordy unlocks the handcuffs.

				JORDY
		I'm sorry.  I'm really sorry.

	Korfin delivers a blanket.  Jordy covers him.

				JORDY (CONT'D)
		You okay?

				MUGGER
		A dog pissed on me!!  I'm gonna sue you
		for this!  You violated my civil rights!

				JORDY
		Your civil rights?!  You tried to rob
		me!  I could arrest you right now! 
		You're lucky you're walking away from
		this.  Now get outta here.

	Jordy gives him a push.  The Mugger wraps the blanket around
	himself cursing - hurrying away.
		

	EXT. 8TH AVENUE - NIGHT

	Exhausted HOOKERS who have worked all night loiter outside a
	sleazy hotel.  CAMERA PANS up to a blinking hotel sign.

	INT. KING EDWARD HOTEL ROOM - NIGHT

	The light is blinking an eerie green and yellow light into
	the room.  Emil is at the window pulling the blind down
	trying to shut out the blinking light.  He pulls it down
	twice and it pops back up both times.  The third time he
	angrily pulls it so hard, it comes off the window completely. 
	He sits down in a chair in frustration - adjusting a pillow
	behind his back.  THE ROSEANNE SHOW is on TV.  Roseanne has
	been talking to a FATHER.

				ROSEANNE (ON T.V.)
		So you slept with your son's wife! 
		What's that all about?

				FATHER (ON T.V.)
		I take full responsibility for sleepin'
		with my daughter in law.  I had low self
		esteem, I thought I had to compete with
		him.

	Emil reaches for his dictionary.

				EMIL
			(mutters)
		Self-esteem?  Self-esteem??

	He flips through his dictionary to find the meaning of self
	esteem.

				FATHER (ON T.V.)
		Losin' my job and everything, caused my
		behavioral disorder.
			(turns to his son)
		Forgive me, Kirk.  Let me hug you?

	The audience boos.  Roseanne mediates...

	Oleg - fresh from the shower with wet hair - sits on the bed
	in his skivvies - staring into the videocamera's LCD screen -
	rewinding Milos' murder.  We see it now for the first time -
	as he rewinds it.  Oleg watches - a bottle of cheap vodka
	between his legs.  Emil, looks up from his dictionary.  He's
	wearing Milos' Rolex. 
	Tamina's jewelry - her brushed gold necklace and pearl
	earrings - are in front of him with Daphne's wallet.  Emil
	looks up - Oleg is holding his videocamera.

				EMIL
			(Czech)
		Turn that fucking thing off!

				OLEG
			(Czech)
		I'm not filming.  I'm watching Milos
		die.  It's just like a move but realer.

	Emil grabs the videocamera.
			(Czech)
		Don't break it!  Don't break it!

				EMIL
		Speak English!

				OLEG
			(English)
		You said speak Czech!

				EMIL
		How you erase this?

				OLEG
		I'll do it.  Don't hurt my camera!

	Emil tosses the camera back to Oleg who drops his vodka
	bottle in order to catch the camera.  Oleg, holding the
	camera like it's gold, goes to the dresser and puts it away. 
	Emil starts to go through Daphne's wallet.

				EMIL
		Stupid, Milos.  I didn't want to kill
		him.
			(noticing)
		What's this?

	Emil found the last card in the wallet.  It's pink with a
	picture of a busty globe.  Printed in the middle is - WORLDLY
	ESCORTS - and a number.

				EMIL (CONT'D)
		Worldly escorts?

	Emil picks up his dictionary and begins to flip the pages -
	finding the meaning of worldly.  He gets up and dials the
	number.  A soft, SEXY VOICE answers.  Soft music in the
	background.

				SEXY VOICE
		Hi?

				EMIL
		Hello?

				SEXY VOICE
		Are you looking for companionship?

	Oleg, who's listening, moves to Emil.

				OLEG
		Whore?

				EMIL
		I'm homesick.  You have Eastern European
		girl?  A Czech girl?

				SEXY VOICE
		Matter of fact, I have a lovely Czech
		girl.

				EMIL
		I take her.  Send her!

	EXT. FIRE STATION 91 - NIGHT

	Korfin's car pulls up to the station - as a fire engine is
	returning.

				JORDY
		Now that you know him, maybe you can get
		extra work in the next movie they make
		about him.

				KORFIN
		Yeah?

				JORDY
		Maybe you can be his stand-in.

	INT. FIRE STATION 91 - NIGHT

	The men are pulling off their equipment - coming down from
	the high of fighting a fire.  Korfin and Jordy walk toward
	the TV room.  The TV is on in the background.  We can see
	Nicolette interviewing Eddie.  He holds up the paint can.

				CHIEF DUFFY (O.S.)
		What the hell is that??  You gave Eddie
		Flemming the evidence?!

	They turn.  DEPUTY CHIEF FIRE MARSHAL DECLAN DUFFY - the head
	of the arson squad - comes over.  Duffy's tough, Irish and
	very political.

				DUFFY
			(pointing to the TV)
		Who did cause and origin?

				JORDY
		Who do you think, Chief?!

				DUFFY
		Then why didn't you talk to the
		reporter?

				JORDY
		'Cause we got more important things to
		do, like finding out who did it.

	They walk to the back of the station and start up the stairs.

				DUFFY
		Don't you guys understand?  It's all
		about image.  The better we look the
		more money I get to pay you guys
		overtime.

				KORFIN
		Yeah, right.

				DUFFY
		What was that, Korfin?

				KORFIN
		I said, yeah, you're right, Chief.  As
		soon as we get somethin' we'll let you
		alert the media.

				DUFFY
		You do that, wiseguy.  Now let's solve
		this thing before Eddie Flemming does.

	They all head upstairs.

	INT. ARSON SQUAD ROOM - DAY

	The Chief, Jordy and Korfin enter.  There are posters of
	pyros, arsonists and terrorists on the walls.  GARCIA - a
	Puerto Rican investigator - looks up from his desk.

				GARCIA
		Hey guys, I got your torch.  He just
		gave a full confession.

	A scruffy, unshaven white man sitting across from Garcia,
	turns.  He is MAX, a pyromaniac in his 40's with a freshly
	scratched cross etched in his forehead.  He craves attention.

				MAX
		It's my fire!  Screw homicide.  I'll
		tell you guys everything!

	Jordy moves to his desk with Korfin.  They sit across from
	each other.  Duffy keeps going to his office, not even
	bothering to stop.

				JORDY
		What's that on your forehead, Max? 
		That's a nice attention getter.

				MAX
		Yeah, I'm religious.  I'm not an Atheist
		like you!  Now, are you guys gonna
		arrest me, or not?

				JORDY
		How did you start the fire this time?

				MAX
		I used an accelerant.

				JORDY
		Yeah?  What kind?

				MAX
			(to Jordy)
		Hey, by the way, I'm really sorry about
		your wife leavin' you.

				KORFIN
		Max.

				MAX
			(continuing)
		...Yeah, and with your old man dying
		last year you - what's it?  Just you and
		the dog now?

				KORFIN
		Max!  

				MAX
		Does it feel bad - I mean the new guy
		your ex-wife's seeing - I hear he's a
		big shot downtown.

	Jordy pops out of his seat.

				JORDY
		That's it!  You're outta here.

	Jordy pulls Max by the collar - pushes him down the aisle.

				MAX
		That's it.  I'm suing.

				KORFIN
		Get in line.

	Korfin takes over - throwing him out.  Jordy turns to Garcia
	who is laughing.

				JORDY
		What's so funny.  How does he know so
		much about me?  Who tells him my life
		story?

				GARCIA
		He hangs around downstairs.  The guys
		talk to him.  He's a joke...

				JORDY
		He's no joke!  One day he's gonna
		graduate from trash can fires and do
		something big.

				GARCIA
		Okay.  Okay.  We'll ban him from the
		station.

	INT. KING EDWARD HOTEL ROOM - TV SET - NIGHT

	As the "Top Story" logo is splashed across the screen,
	accompanied by a catchy TV THEME, Robert Hawkins introduces
	America's highest rated 'news magazine' show.

				ROBERT HAWKINS
		Good evening, I'm Robert Hawkins and
		this is Top Story.  Tonight we bring you
		an exclusive interview with Stephen
		Geller - who horrified the nation two
		years ago when he went berserk and
		murdered three clerks in a Manhattan
		shoe store.  But now, Mr. Geller's
		claim, spoken softly and articulately,
		is that he is the victim.  According to
		Mr. Geller, the events of that fateful
		day were not his fault but were the
		fault of his psychiatrist.  Hard to
		believe...watch.

				EMIL (O.S.)
		Louder.

	VIDEOCAMERA SLOWLY ZOOMS OUT and PANS over to Emil, sitting
	on the hotel bed watching the TV.  He looks at us.

				EMIL (CONT'D)
		Louder.

	Oleg's hand reaches in front of the lens - turning up the
	volume.  The scene cuts back to Stephen Geller being
	interviewed by Robert Hawkins and his camera crew.  He's
	sitting on the front lawn of a mental institution in a paint
	stained shirt.  A showing of his artwork is displayed in the
	background.  Patients peruse the paintings of weird
	dysfunctional faces that avoid eye contact.  One of the
	paintings depicts Eddie Flemming and Leon Jackson.

				STEPHEN GELLER
		This had nothing to do with shoes that
		didn't fit or my relationship with my
		father who, as you know, made a fortune
		selling penny loafers in the fifties. 
		These people died because of the
		criminal actions of my doctor.

				ROBERT HAWKINS
		Your doctor?

				STEPHEN GELLER
		Yes.  My psychiatrist didn't insist that
		I stay on my medication.

				ROBERT HAWKINS
		...so you feel absolutely no
		responsibility for killing these people?

				STEPHEN GELLER
		It was my finger that pulled the
		trigger, but I'm not morally
		responsible.  My psychiatrist knew what
		I was capable of.  How could I know. 
		I'm not a doctor.

				ROBERT HAWKINS
		You seem very savvy for a man who's been
		found mentally incompetent to stand
		trial.

				STEPHEN GELLER
		Look, I'm a victim here, too.  I was a
		year away from getting my masters in
		Art, now I'll never graduate.  My life
		has been permanently disrupted.

				ROBERT HAWKINS
		Permanently disrupted?  Aren't you
		selling paintings now for quite a lot of
		money?  Hasn't this 'incident' as you
		call it, jump started your career as an
		artist?

				STEPHEN GELLER
		Look, I'm in here.  You call this a
		career move?

				ROBERT HAWKINS
		And isn't there a movie in the works
		about you?

				STEPHEN GELLER
		We're in negotiations, that's correct.

				ROBERT HAWKINS
		But doesn't the Son of Sam Law prevent
		criminals from profiting from their
		crimes?

				STEPHEN GELLER
		That doesn't apply to me because I'm not
		a criminal.  I'm not a criminal!  I
		wasn't convicted.

	Emil leans forward - listening.  Fascinated.

				EMIL
		I love America.  No one is responsible
		for what they do.

	There's a KNOCK on the door.  Our VIDEOCAMERA POV swings over
	to it.  Then WHIPS back to Emil.  Emil looks at us.

				EMIL (CONT'D)
		Get in the bathroom!

				OLEG (O.S.)
		Whatever we do - we fuck her, right?

				EMIL
		Oleg, get in bathroom, stay there and
		shut up!

	Emil turns off the TV.  Our POV backs into the bathroom,
	closing the door but leaving it open a crack.  Emil looks
	down at his shoe.  The POV PANS down to the kitchen knife
	sticking out of Emil's BOOT.  Emil's hands pull his pants
	cuff over it.  POV PANS up to Emil as he moves to the door
	and opens it.  It's not Daphne and she's not world class.

				HONEY
		Hi, I'm Honey.

				EMIL
		Where's Czech girl?

				HONEY
		Baby, I'm anybody you want me to be. 
		I'm a little schoolgirl, I'm mommy, I'm
		a Czech girl.

	She enters.  Closes the door behind her.

				HONEY (CONT'D)
		Now I like to get business out of the
		way before we get down to pleasure.  Why
		don'tchya put my money on the dresser.

				EMIL
		I ordered a Czech girl.  Daphne, you
		know her?

	Oleg ZOOMS in for a CLOSE UP of Honey.  During the rest of
	the scene Oleg films her.  Honey begins to undress.

				HONEY
		It's an outcall service run out of an
		apartment.  I don't meet the other
		girls.  Aren't you gonna get undressed?

				EMIL
		Where is escort service?

				HONEY
		That's confidential.  Could you put the
		money on the dresser?

				EMIL
		I like to talk to the person who runs
		the service.  Can you give me address?

				HONEY
		Look.  Do we have a problem here? 
		There's no reason to have a problem. 
		I'm gonna make you feel real good.  You
		wanna Czech girl? 
		After I'm done with you, you won't miss
		her.  Now why don't you pay me?

	She starts to unfasten Emil's belt.

				EMIL
			(stopping her)
		Listen to me.  I don't want sex.  Just
		give me the address and then you go.

				HONEY
			(suddenly hard as nails)
		Look, man, I don't give a shit if you
		want sex or not, but you're payin' for
		my time.

	Emil pulls the knife out of his boot and SHOVES her against
	the door, PUSHING the blade against her throat - suddenly
	furious like he was before killing Milos and Tamina.

				EMIL
		Give me the address!!

				HONEY
		Alright, alright - don't hurt me! 
		Please, it's in my book, in my purse!

	Emil backs off as she reaches for her purse, and comes out
	with a can of mace, SPRAYING Emil's face!

	Emil stumbles backwards - Oleg holding him in the frame.  He
	WHIP PANS back to Honey as she grabs her clothes, unlocking
	the door but Emil's HAND SLAMS it shut!  Emil turns blindly,
	rubbing his burning eyes - guarding the door.  Honey darts
	toward the bathroom - she pushes open the door and runs into
	Oleg who is VIDEOTAPING HER.  Horrified, she turns around as
	Emil SMASHES her in the face so hard she topples backwards,
	tripping into the bathtub, pulling the shower curtain down on
	her!  Like a panther out for the kill, Emil POUNCES.  Oleg
	films as Emil lifts his hand, gripping...

	THE KITCHEN KNIFE

	As Emil's hand comes FLYING DOWN - then RISES UP, BLOODIED. 
	Her screams are muffled by the shower curtain wrapped around
	her face.  Oleg films the scene as the knife plunges DOWN
	INTO:
		
		INT. FIRE STATION 91 - ARSON SQUAD ROOM - NIGHT

	DAPHNE, a sketch of her face.

				JORDY (O.S.)
		Her lips are fuller than that.  You can
		see 'em a mile away.

	WIDER

	Food containers are scattered all over the place.  The female
	COMPOSITE ARTIST looks at Jordy.  Stacks of failed sketches
	sit beside her.

				COMPOSITE ARTIST
		What about her cheek bones?

				JORDY
		Her cheek bones are prominent and her
		eyes were huge.  Big, blue eyes and when
		I saw her, she looked scared.  Like she
		was looking to get away.  But she was
		absolutely beautiful.

	The composite artist looks at Jordy.

				JORDY (CONT'D)
		I gotta good look at her.

	Korfin has his chair turned around from his desk and is
	watching the sketch evolve as he speaks on the phone to the
	landlord of the 7th Street brownstone.  Garcia is also on the
	phone.  The other investigators are gone.  Working late into
	the night.  Everybody's exhausted.  It's almost dawn.

				KORFIN
		-- From Czechoslovakia?  And how long
		have they been livin' in your building?  
			(writes 4 YEARS on his pad)
		Alright, I'll be in touch when we know
		somethin'.
			(to Jordy)
		Milos and Tamina Karlova.  They were
		quiet and kept to themselves.  Landlord
		don't know who your girl is.

				JORDY
		How long they been livin' here?

				KORFIN
		You hear that question, Garcia?

				GARCIA
		Yeah, I got Immigration on the phone -
		they've been here illegally.

				KORFIN
		Well, they're definitely permanent
		residents now.

				GARCIA
		I got the owner of the plumbing company
		Milos worked for.

				KORFIN
		Why don't we get some sleep and we'll go
		see him in the morning.

				JORDY
		You go home.  I'm takin' your car and
		goin' back to the crime scene.

				KORFIN
		Aren't you tired?

				JORDY
		If I go home I won't be able to fall
		asleep anyway.

	Jordy takes the sketch of Daphne which isn't a bad likeness
	and heads for the door.  Korfin falls in behind him.  As they
	pass Garcia he hands Jordy the address.

				KORFIN
			(of the picture)
		She keepin' you up?  Like to meet her,
		huh?  She'd make you forget your ex
		wife.  Cure your insomnia.

	INT. MILOS' APARTMENT - DAWN

	CAMERA DESCENDS FROM THE SKY picking up Jordy as he enters
	what is left of Milos and Tamina's apartment.  The roof has
	been burned off. He moves into the next room, trying to see
	through the darkness - looking through the muck and char.

				EDDIE
		Okay to smoke?

	Jordy turns, surprised.  Eddie sits on a singed chair.  He
	pours from a half-pint bottle of vodka into his 'won ton
	soup' container, smoking a cigar.  On the arm of the armchair
	is a brown legal folder and stacks of photographs of the
	crime scene and the burned bodies.

				JORDY
		It's your crime scene now.  You can do
		what you want.

				EDDIE
		Watch the news?

				JORDY
		Nah, I musta missed it.

				EDDIE
		Well, just so you know.  I gave you guys
		the credit.

				JORDY
		Well, just so you know, I don't care
		about that stuff.

				EDDIE
		Nah, why should you?

				JORDY
		I don't even watch TV.

				EDDIE
		Good.  Good.  Commendable.

	Eddie knocks his 'won ton soup' back.

				JORDY
		Did you get a report from the M.E.?

				EDDIE
		Sure.  But I would like to ask you
		something.  You got a problem with me?

				JORDY
		If you found me steppin' on your crime
		scene - it might piss you off, too.
			(then)
		What about the report?

				EDDIE
		You were right, they were both dead
		before the fire.  The male was stabbed
		so hard the killer broke off the tip of
		the knife in his spine.  That's usually
		an indicator of something personal.

	Jordy pulls out a sketch of Daphne.  Hands it to Eddie.

				JORDY
		The Super said he'd seen her before but
		she didn't live here.

				EDDIE
		Pretty.

				JORDY
			(acts as if he didn't notice)
		Hmmmm.

				EDDIE
		Maybe you don't care about that either.
			(beat)
		Prettiest suspect I've had in awhile.

				JORDY
		Who says she's a suspect?

	Jordy tries to take the sketch back.  Eddie holds on.

				EDDIE
		What would you call her?

				JORDY
		Look, I'm not even sure she has anything
		to do with this.  I saw her outside
		after the fire - thought it was a lead. 
		Maybe she saw something.  Maybe she was
		visiting somebody here.  Who knows?

	Eddie walks up to the burnt mattress - where the bodies were.

				EDDIE
		Obviously they weren't having sex.  As
		you pointed out.  So why go through all
		the trouble of putting 'em like that?

	Eddie passes a crime scene photo of the bodies to Jordy.

				JORDY
		Maybe it's a ritual thing or someone
		trying to send a message.  Burial rites
		are taken very seriously in Eastern
		Europe.  It could be to humiliate them. 
		Just burning them up, no proper funeral,
		it's like condemning them to hell.

				EDDIE
		Eastern Europe.  Like what?  Romania? 
		Hungary?

				JORDY
		Or Czechoslovakia.  The Slavs have been
		fighting the Germans and the Russians
		for a thousand years.  These are very
		intense people and they take things
		personally.

	Eddie's cellular rings - he grabs it.

				EDDIE
		Yeah?  Where?  You sure it was a knife? 
		Uh-huh.  Really?  Okay.
			(to Jordy)
		We've got another murder - in a hotel on
		Eighth Avenue.  A stabbing.  Clerk said
		the room was rented by a Russian...

	Eddie's moving with Daphne's sketch. 

				JORDY
		I'll come with you.

				EDDIE
		There wasn't a fire.  There'll be
		nothing for you to do.

				JORDY
		I can watch you, Eddie.  Maybe I'll
		learn something.

				EDDIE
		This isn't homicide school.

				JORDY
		My parents are from Poland.  I can help
		with the Eastern European angle.

				EDDIE
		You're Polish?

				JORDY
		My folks are.

				EDDIE
		Stay here.
						

	EXT. TIMES SQUARE - NEWS STAND - DAY

	Video POV of the news stand as a hand reaches into frame and
	picks up a copy of THE NEW YORK POST.  Eddie's photo is on
	the front page - holding the kitchen timer by the wires. 
	Underneath his picture the caption reads, "DOUBLE HOMICIDE...
	FLEMMING'S ON IT."  The videocamera widens out revealing Emil
	standing in front of a Times Square news stand, reading the
	front page.  The videocamera turns around - until focusing on
	Oleg himself.

				OLEG
		This is second day in America.  First
		day was very exciting.  Full of thrills
		and chills.  Over there, is co-star of
		my new movie, Emil!

	He turns the camera around - FILMING EMIL.

				EMIL
			(to vendor)
		Who is he?

				VENDOR
		New York's finest.  This is his case.

	The VENDOR - picks up People.  Stephen Geller is on the
	cover.

				VENDOR (CONT'D)
		This all you want?  

				EMIL
		Do you know how much killer gets for
		movie rights?

				VENDOR
			(People)
		In here, says he wants a million.

				EMIL
		Million?!  The killer gets one million
		dollars for a television interview?

				VENDOR
		Hey, tabloids paid Ted Bundy - famous
		serial killer - half a million for his
		interview.  And how much you think
		Monica got for writing book about the
		President coming on to her?  It pays to
		be a killer or a whore in this country. 
		Look, you want magazine or not?

				EMIL
		Yes.  Both.

				OLEG
		And these.

	Oleg picks up FILM COMMENT, MOVIELINE and PREMIERE magazine. 
	Emil pays for everything.

				EMIL
			(to Oleg)
		Get a taxi.

	Oleg tucks the magazines in his coat, picks up the suitcases
	and hails a taxi.  As Emil collects his change he sees an old
	BLIND WOMAN waiting at the crosswalk.  The light's blinking
	WALK.

				EMIL (CONT'D)
		Let me help.

	Emil gently takes her arm and crosses her to the other side.

				BLIND WOMAN
		Thank you, son.

	Emil watches her walk on.

	INT. KING EDWARD HOTEL ROOM - DAY

	The hotel room is a hive of activity.  GIL is dusting the
	dresser for prints.  Another officer is stripping the bed and
	putting the bedding into a big, clear plastic bag.  As Eddie
	enters the crime scene, a POLICE PHOTOGRAPHER is standing in
	the doorway taking pictures.

				EDDIE
		Where is she?

				LEON
		Takin' a bath.

				EDDIE
		Any I.D.?

				LEON
		Still unknown but we're running prints. 
		Kid over there caught the case.

	Jordy enters.  Leon steps in his way.

				LEON (CONT'D)
		Sorry...PD only.

				EDDIE
		It's okay.

	Eddie walks over to a young detective.  TOMMY CULLEN, only
	26, is excited to meet Eddie.

				TOMMY
		Tommy Cullen.  Heard a lot about you. 
		Nice to meet you.  Here's what we got. 
		A girl in there, figure her to be a
		prostitute, looks like she was fighting
		for her life.  She's got defense wounds
		on her hands.  Right this way - in the
		bathroom.

				EDDIE
		After you.

	Eddie follows Tommy into the bathroom.  There's blood
	splattered all over the walls and the floor.  Honey's topless
	body lies in the tub tangled in the bloody shower curtain. 
	MURPHY, an Irish medical examiner (M.E.), is examining the
	body.

				TOMMY
		Room was registered to a Francis Capra.

				JORDY
		Capra?  That's not Czech or Russian. 
		Who said he sounded Russian?

				TOMMY
		The clerk?

				EDDIE
		Check the switchboard, see what phone
		calls were made from this room.

				TOMMY
		I'll do it.

	Tommy heads out.  Eddie takes out his cigar holder.  Slides
	out what's left of his cigar.  Re-lights it.  Looks down at
	Honey's body in the bathtub.  Gil's dusting the tub for
	prints.

				MURPHY
		Clothes were off in the other room.  Tub
		is dry except for the blood.

				EDDIE
		Any of you guys take a piss lately?

	Gil looks confused.  Eddie points to the toilet.  Seat is up.

				EDDIE (CONT'D)
		Do the seat for me.

	Gil crosses to the toilet and starts to dust it.  Eddie
	stands in the bathroom - studying the scene.  Holding the
	unlit cigar.  Looking around at the blood splattered walls.

				EDDIE (CONT'D)
		Only one guys checked in?

				LEON
		Yeah.

				EDDIE
		C'mere.  You wanna go to homicide
		school?  Here - make yourself useful.

	Eddie positions Jordy behind the tub next to the wall.

				EDDIE (CONT'D)
		Our killer...our killer's standing here
		slashing at her.  She's fightin' him. 
		The blood is splattering this way.  It's
		on this wall...
			(pointing to the right of
			 Jordy)
		And there's some specks over here.
			(to the left of Jordy)
		There's nothing here because someone was
		standing right here.  Someone big.  And
		he's got blood on him.  Lots of blood. 
		He wouldn't walk out of here like that.
			(turning to Murphy)
		Murphy, what kind of knife you think
		we're talking about here?

	Murphy pulls out a clear plastic ruler and walks over to the
	blood-splattered wall.

				MURPHY
		If you look here where he missed and hit
		the wall you see that the marks aren't
		deep but they're kinda wide... not your
		everyday kitchen or pocket knife.

				EDDIE
		What if the tip was broken off?

				MURPHY
		Could be.  Then we should find it here
		somewhere.

				EDDIE
		I think we've already found it.

	Eddie exchanges a look with Jordy as Tommy, the young
	detective, returns.

				TOMMY
		There was only one call from this room
		last night.  I dialed it.  It's an
		escort service.

				LEON
		Did you identify yourself?

				TOMMY
		Hey, I'm new but I'm not stupid.

				EDDIE
		Call communications and get an address
		on that number.

	Tommy holds up a slip of paper with the outcall service
	address on it.

				EDDIE (CONT'D)
		Good work.

	INT. KING EDWARD HOTEL ROOM - STAIRS - DAY

	Jordy hurries out - catches up with Eddie.

				JORDY
		You goin' to the escort service?

				EDDIE
		You got any better ideas?

				JORDY
		Mind if I ride along with you?

				EDDIE
		This has nothing to do with your fire.

				JORDY
		But what if it does?  You might need my
		help.

	As Eddie exits the hotel, a MAN approaches.

				MAN
		Hey, Eddie, can I get your autograph for
		my son?

	EXT. KING EDWARD HOTEL - DAY

	Jordy catches up.  Eddie finishes signing the autograph using
	the man's back.

				EDDIE
		I'll let you know what happens.

				JORDY
		This is ridiculous.  I'm not gonna be in
		your way - we can talk the case over.

				EDDIE
		Tell you what - I'll flip you a coin. 
		If you win you can come with me.  If you
		don't win, you don't come.

				JORDY
		I'll call it... tails.

	Eddie pulls out a coin and hands it to Jordy.

				EDDIE
		Okay.  I'll call it.  Heads.

	Jordy flips the coin and it's heads.

				EDDIE (CONT'D)
		Heads.  See, you lost twice.
			(beat)
		Okay.  Get in.

	Jordy goes for the passenger side of the car.  Before Jordy
	can get in, Eddie starts to pull away.  Jordy stands on the
	sidewalk - dejected.  Eddie stops the car again and this time
	lets Jordy get in.


				WHIP PAN TO:

	INT. UPPER EASTSIDE HALLWAY - DAY

	Eddie and Jordy arrive in front of Rose's door.  Eddie knocks
	and flips a coin to Jordy.

				EDDIE
		Oh here.  A souvenir.

	Jordy takes the quarter.  Not understanding what Eddie means. 
	He looks at the quarter.

				JORDY
		Two heads.

				EDDIE
		Better than one.

	Eddie suckered him with the coin toss.  Jordy reacts.  Eddie
	laughs - squirts Binaca in his mouth.  Knocks again.  We hear
	ROSE HELLER.

				ROSE (O.S.)
		Who's there?

				EDDIE
		Police.  We'd like to ask you a few
		questions.

				ROSE (O.S.)
		I have nothin' to say.  If you wanna
		contact my attorney...

				EDDIE
			(commands)
		Homicide, Miss Hearn.  It's Detective
		Eddie Flemming.  Open up.

	Rose reacts.  Immediately UNLOCKS, UNCHAINS and opens the
	door!  

				ROSE
		You!  I've seen you on TV!

	Eddie glances self-consciously at Jordy.

				ROSE (CONT'D)
		C'mon in.  C'mon in!

	INT. ROSE'S APARTMENT - DAY

	They enter.

				ROSE
		Just a minute.  Shit.  And I don't have
		a camera.  Hold on a second.

	Rose moves back to the phone - finishes up her conversation
	in Afrikaner.  We hold on Eddie and Jordy at the door.  Eddie
	looks around - taking in the place.  FOUR GIRLS are on
	phones.  Two girls take orders for customers.  The other two
	work the phone sex lines.  Rose hangs up the phone - turns to
	Eddie and Jordy:

				ROSE (CONT'D)
		What's wrong?

				EDDIE
		We don't have her I.D. yet, but one of
		your girls was killed last night at the
		King Edward Hotel.

				ROSE
		Oh my G-d.  Honey!  Honey's dead?

				JORDY
		Do you remember the man who called?

	Though Rose answers Jordy, she directs her response to Eddie.

				ROSE
		Yeah.  He wanted a girl from
		Czechoslovakia, but I sent him Honey
		'cause once they get there, you know, it
		doesn't really matter - Honey was
		killed...?  Poor girl...

				EDDIE
		Do you have any Czech girls working for
		you?

				ROSE
		No.

				EDDIE
		Did you tell him you did?

	A BUTCH GIRL enters.  Rose speaks to her in Afrikaner.

				ROSE
			(Afrikaner)
		Boy, she's so popular all the sudden.

				EDDIE
		What are you saying?

				ROSE
		Daphne.  Another guy came in asking me
		about her, too.

	Jordy pulls out the sketch, unfolds it.

				JORDY
		This her?

				ROSE
		Yeah.  Sort of.  I tried to recruit her,
		gave her my card.  She said she'd think
		about it but I never heard from her.

				BUTCH GIRL
			(Afrikaner)
		Beautiful eyes.

				EDDIE
		Who came by looking for her?

				ROSE
		He said he was her cousin.  I told him
		where she works.  They were just here.

				EDDIE
		Describe him.

				ROSE
		Tall, short-haired, scary eyes.  Second
		guy with him was...shorter, with a
		wrestler's build.  And he wouldn't turn
		his videocamera off me.

				EDDIE
		He had a videocamera?  Where is she? 
		Quickly!

				ROSE
		She washes hair up at Ludwig's - a salon
		on 63rd and Madison.

	EXT. EDDIE'S CAR - DAY

	As Eddie speeds through the street, SIREN BLARING.

	INT. EDDIE'S CAR - DAY

	Jordy holds on as Eddie darts in and out of cars with
	astonishing dexterity.  This man can drive.  Eddie picks up
	his phone - dials.  Jordy is on his cell phone as well.

				EDDIE
		Leon - meet us at 63rd and Madison. 
		Hair salon.  Ludwig's. 

				JORDY
			(overlapping)
		I'm on my way with Eddie.  Ludwig's. 
		63rd and Madison.  The suspects might be
		there already.

	Eddie looks over as Jordy disconnects.  Eddie picks up a beer
	he was holding between his legs - finishes it.

				EDDIE
		You thirsty?

				JORDY
		I'm on duty.

				EDDIE
			(drinking)
		So am I.  Alright, I'll go inside and
		you cover the back.

				JORDY
		Of course.

				EDDIE
		Hey!  I always wanted to be a cop when I
		was a kid.  I dreamed of running up to a
		door, kicking it in, pulling my gun and
		yelling 'Freeze!' at the bad guy! 
		What'd you dream about?

				JORDY
		I wanted to run up to a building on
		fire, kick in the door, rush into the
		smoke and save a kid.

				EDDIE
		Then I guess we're doin' this the right
		way, aren't we?  If we pull up to a
		burning building I'll gladly let you go
		first.

	Jordy looks at Eddie - can't deny he's right.

	INT. LUDWIG'S SALON - DAY

	We're in a moving video POV of Ludwig's, the hair salon -
	it's big and spacious.  The lens finds THE RECEPTIONIST.

				OLEG (O.S.)
		Daphne Handlova?

				RECEPTIONIST
		Daphne?  In the back.  Probably
		shampooing a customer's hair.

	Oleg approaches Daphne who is mixing hair dye.  LUDWIG, the
	owner, is with her.

				LUDWIG
		Why are you messing with your hair color
		again?  You're going to kill your hair. 
		You won't look good with black hair.

				DAPHNE
		I want to do it, alright?

				LUDWIG
		Well, then do it after work.  A
		customer's waiting.

	He leaves, a customer approaches.  She smiles at him - turns
	on the water in the sink then sees - Oleg filming her.  She
	backs up...suddenly moves to the emergency door!

	TO THE BACKYARD

	There's a garden out there.  Daphne runs toward the alley. 
	Oleg follows her - still videotaping.  As she rounds the
	corner she bumps into...Emil!  He pulls out his kitchen
	knife, shoving her against the wall, pushing the blade with
	the broken tip against her throat.

				EMIL
		I...I have a temper.

	She looks at him, not understanding.  Oleg films the scene.

				EMIL (CONT'D)
		When I lose it, I lose control.  I
		didn't intend to kill Milos but he stole
		from me.  Cheated me!  When I went to
		prison, they beat me.  I still didn't
		tell he was my partner.  I loved Milos
		like a brother...

	The tone in Emil's voice - there's an uncharacteristic
	softness to it.  He wants to reconcile his behavior to her.

				EMIL (CONT'D)
			(in English)
		I'm not a killer.

	The back door opens.  He shoves the knife in his pocket as
	Ludwig peers around the alleyway.  What he sees is Emil
	leaning close to Daphne, kissing her.

				LUDWIG
		Daphne, will you be coming back to work?

				DAPHNE
		In a minute, Ludwig.

	Ludwig leaves.

				EMIL
		Smart girl.  I'm glad you're not a
		whore.  But washing hair?  This is no
		job for a woman as beautiful as you. 
		They should be washing your hair.

	Emil reaches into his pocket and pulls out SOMETHING, sticks
	it in the palm of her hand, closing her fingers around it.

				EMIL (CONT'D)
		I don't want to kill you.  But if you
		talk, I will.
			(whispers)
		I thought you'd want these.

	He taps her hand...he turns and goes out the rear exit.  Oleg
	follows.  Jordy arrives.

				JORDY
		...Daphne?

	She says nothing.

				JORDY (CONT'D)
		I'm a fire marshal.  You remember me
		from the other night?  You are Daphne,
		right?

	She says nothing.  Eddie arrives.  Daphne turns.  Recognizing
	Eddie.

				EDDIE
		You don't have to be afraid.  We're here
		to protect you.  Come with me.  We want
		to talk to you.  You speak English
		alright?

	Eddie looks at Jordy.  Takes Daphne by the arm.
		
		EXT. LUDWIG'S SALON - CONTINUOUS

	As they come out, Eddie notices Daphne clutching something in
	her hand.  He reaches for her hand.  Opens it.  It's a
	brushed gold necklace.

				EDDIE
		Did he give you these?  Was he just
		here?

	Eddie searches the streets.  Notices Oleg and Emil on the far
	corner.  Oleg is videotaping him.  Leon and Tommy pull up. 
	Korfin behind.  They all pop out.  Eddie grabs Leon -
	squeezes his arm - quietly.

				EDDIE (CONT'D)
		The other side of the street.  The guy
		with the videocamera.
			(back to Jordy)
		Don't look - put her in the car.
			(to Leon)
		Stay this side.

				LEON
			(back to Tommy)
		Stay with her.

	They start heading down the curb - trying not to attract the
	attention of Oleg and Emil.

	A VIDEO CLOSE-UP

	of the scene from across the corner.

				EMIL
			(Czech)
		Put the fuckin' camera down!  Let's go!

	Emil starts to flee.

	EXT. NYC STREETS - CONTINUOUS

	What follows next is an incredible foot chase with Eddie,
	Jordy, Korfin and Leon running through traffic - chasing
	Emil.  Eddie tries to stay in the lead but is running out of
	breath.

				EDDIE
		Split up!

	Jordy runs down one side of Madison - Eddie, the other. 
	Korfin continues down 62nd and Leon covers the other side. 
	They search for Emil, grabbing people, turning them around,
	missing him.  Emil seems to have disappeared.

	Leon, gun raised, approaches the cafe.  As he rounds the
	corner, Emil darts out, cracking Leon across the face!  Leon
	crashes into a table, dropping his gun.  Emil scoops up the
	gun and PISTOL-WHIPS Leon.  BEATING the detective to a pulp. 
	People are running from the scene.  Emil takes Leon's wallet. 
	He is distracted by LAUGHTER.  Oleg is VIDEOTAPING the scene.

				OLEG
		Emil, look!

	Oleg swivels with the videocamera.  Korfin is running toward
	them - pushing through the crowd.  Emil FIRES!  Korfin is
	blown backwards.

				OLEG (CONT'D)
		Perfect!  Cut.  Print!

	Eddie arrives.  Bends down to Leon, whose face is red with
	blood.  Jordy runs to Korfin, who's laying in the street,
	shot in the side.  Jordy cradles his partner.

				EDDIE
		Are you hit?

				LEON
		No.  I'm okay.

				JORDY
			(to Korfin)
		Bobby, Bobby!  Where're you hit?!

				KORFIN
		It hurts.  Aw, Jesus!

				JORDY
		Lay down.  Stay down, Bobby.

	Jordy looks up as Eddie steps into the center of the street. 
	Cars screech out of the way!  Eddie crouches, taking aim at
	Emil, who is almost two blocks away.  It's an impossible
	shot, out of range.

	But Eddie closes an eye, aims and squeezes off one SHOT.  Two
	blocks away, Emil topples.  Korfin and Jordy look at Eddie,
	astonished he made the shot.  Emil scrambles to his feet. 
	Runs.  Eddie holsters his weapon.  Pulls out a handkerchief. 
	Dabs Leon's wounds.

				LEON
		He got my gun!  Motherfucker was filming
		the whole time!

				EDDIE
		I know.  Relax.  Take it easy.  Don't
		worry, we'll get those fuckers.
						

				DISSOLVE TO:

	EMS VEHICLE

	Eddie and Jordy watch as Korfin on a stretcher, is loaded in
	an EMS VEHICLE and in b.g., an EMS DOCTOR attends to Leon's
	bloody face.  Eddie and Jordy turn to go back into the
	restaurant, now cleared out - as Nicolette Karas arrives with
	her cameraman.

				NICOLETTE
		Detective - can you tell us what
		happened here?

				EDDIE
		I can't talk right now.  We have some
		things to take care of.

	Jordy moves off, he doesn't want to get pulled in front of
	Nicolette.

	Daphne can be seen waiting in the back of the restaurant,
	maybe twenty feet away.  Tommy stands next to her.  This is
	where Eddie and Jordy are headed.

				NICOLETTE
		I understand, but I noticed that the
		Fire Marshall is here with you.  Is this
		somehow related to the fire department?

				EDDIE
		I really can't give out any information
		right now at this point.

				NICOLETTE
		Okay.  But I do understand that your
		partner, Leon Jackson's been injured. 
		Is that correct?

				EDDIE
		He was hurt, but not seriously.  He'll
		be fine.

				NICOLETTE
		Do you have the suspect in custody?

				EDDIE
		Um...now is not a good time, okay. 
		Detective Jackson's hurt.  He's fine. 
		I've got a Fire Marshall shot, Detective
		Jackson is hurt but not seriously.

				NICOLETTE
			(to cameraman)
		Alright, cut, cut, cut.

	Mike the cameraman cuts the cameraman - lowers it from his
	shoulder.

				NICOLETTE (CONT'D)
			(to Eddie)
		Eddie, are you okay?

				EDDIE
		Yeah.  Now's not a good time.

				NICOLETTE
		Alright.

				EDDIE
		Alright?

				NICOLETTE
		Alright.

				EDDIE
		Alright.

				NICOLETTE
		Okay.

	Eddie walks into the restaurant.  Throws a look back at her,
	then enters.

	INT. ARMAND RESTAURANT - DAY

	Jordy talks to Daphne. 

				DAPHNE
		I told your partner, I can't help.  I
		didn't see anything.

				EDDIE
		C'mon, start at the beginning.  You know
		these people?

				DAPHNE
		Tamina was a friend of mine.  My shower
		was broken, she let me use theirs.

				EDDIE
		Go on.

	She says nothing.

				EDDIE (CONT'D)
		Whether you tell us or not, we'll find
		out.  Better if it comes from you.

				DAPHNE
		If I tell you, will you arrest me?

				EDDIE
		Arrest you for what?  Why would we
		arrest you?

	She still hesitates.

				EDDIE (CONT'D)
		What are you hiding?  Why are you afraid

				JORDY
		She just saw two of her friends killed! 
		They probably threatened her.

				EDDIE
		Is that all there is?

	She looks at Eddie.

				EDDIE (CONT'D)
		Are you here illegally?  Don't worry
		about that.  We'll talk to Immigration. 
		They won't deport you.

				DAPHNE
		No, no, don't talk to Immigration!

	She clams up.

				JORDY
		Why not?

				EDDIE
		Something back home?

	Jordy leads Daphne to a table - she sits.  Eddie sits across
	from her.  Jordy crouches down next to her.

				DAPHNE
		...my little sister and I shared a flat -
		I came home one night and a man was
		raping her.  His gun was on the chair...
		He came at me and I shot him.

				JORDY
			(optimistic)
		Alright.  That's a justifiable homicide.

				DAPHNE
		Yes, but he was a cop.

				EDDIE
		A cop?

				DAPHNE
			(beat)
		I'm from a small town in Slovakia.  Like
		the South here.  The Police is right, a
		civilian is wrong.  So I fled.

				EDDIE
		Look, we can help you but right now we
		have to deal with what's happening here. 
		Tell us the truth...is that the truth?

				DAPHNE
		You're a cop - you'll never believe me.

				JORDY
			(to Eddie)
		Can I talk to you?

	Eddie steps away with Jordy.  Keeping his eyes on Daphne. 
	She tries to listen.

				EDDIE
		She's fucked.  Even if that story is
		true.

				JORDY
		Raw deal.

	Eddie tilts his head.  Measures Jordy.

				JORDY (CONT'D)
		Look - let me talk to her.  Any leads I
		get, they're all yours.  Just let me
		have a first crack at her.

				EDDIE
		You wanna talk to her alone?

				JORDY
		Yeah.

				EDDIE
		What would your girlfriend think of
		that?

				JORDY
		I don't have a girlfriend.

				EDDIE
		My point exactly.

				JORDY
		I'm serious here.

				EDDIE
		So am I.

				JORDY
		C'mon.  You intimidate her 'cause you're
		a celebrity.  She sees me differently.

				EDDIE
		You're her Savior?  Is she the kid
		you're gonna save from the burning
		building?

				JORDY
		You know what I'm saying here.

	Eddie looks at his watch.  Thinks it over.  Measures Jordy.

				EDDIE
		Okay, tell you what, I'll give you a
		head start.  You take her to the station
		house.  Don't let her out of your sight. 
		She's the only warm body we got left.

				JORDY
		Hey.  I'm a professional.

				EDDIE
		Women like that have a way of turning
		professionals into amateurs.

	He gives Jordy a look and heads for the door.

	INT. A SEEDY BATHROOM - DAY

	Emil pulls off his sock and shoe, lifts his foot into a
	stained sink and washes the blood away, exposing the chunk of
	pink flesh taken out of his ankle.  Emil grabs some toilet
	paper, plugs the wound, then cuts the towel off the dispenser
	with his kitchen knife and wraps his ankle.  He grits teeth
	in pain.  The lights go out.  Then Oleg adjusts the
	fluorescent light above the sink.

				OLEG
		Gotta light the scene better.  Now it's
		more moody... like a scene from THE
		THIRD MAN.

				EMIL
		Shut up.

				OLEG
		Does it hurt?

	Emil lifts his foot out of the sink.

				EMIL
		This is nothing.

	Emil lifts his shirt, exposing his back.

				OLEG
		Oh, shit.  I hate looking at that!

				EMIL
		Don't want to film this?

	We don't see what Oleg sees - not yet - but from his
	expression, it's horrible.

	INT. JORDY'S CAR - DAY

	Daphne rides in the backseat.  Jordy's watching her in the
	rearview.

				DAPHNE
		Now I become custody of police
		department?

				JORDY
		If you cooperate with the DA - maybe
		they'll help you with your situation.

				DAPHNE
		I will if they don't send me back.

				JORDY
		They won't until this is over.

	She looks away.  Out the window.  Jordy sees emotion filling
	her eyes.  She looks back at him - her eyes have teared up.

				DAPHNE
		Are you married?

				JORDY
		Divorced.

				DAPHNE
		Do you live alone?
			(beat)
		I've been in these clothes since...the
		killings.  Could we stop at your place? 
		I could take a shower...before I go into
		custody?

	Jordy looks at her.  Can't quite tell if she's trying to
	manipulate him or really just wants to get cleaned up before
	all the shit starts.

				JORDY
		I can't take you to my place.

				DAPHNE
		Somewhere else?

	Jordy looks at her...
		

	EDDIE

	Staring right at us.

				EDDIE
		I want to talk to you about something
		serious.

	He holds up the diamond engagement ring.

				EDDIE (CONT'D)
		I want to live the rest of my life with
		you...I don't know you've been married
		before and I've never been married, but
		I do love you, and...

	Eddie is standing in front of a mirror - rehearsing the
	proposal.  He notices a small dab of blood on his shirtcuff. 
	Leon's blood.  Paulie enters carrying a towel and a vodka
	tonic.

				PAULIE
		She's here.

	Paulie sets down the drink and begins their silent ritual. 
	He hands Eddie the towel.  Eddie wipes off his face and
	hands, then hands the towel back to Paulie.  Paulie helps
	Eddie on with his coat.  Eddie takes some Visine out of his
	coat pocket.  Drops a few in each eye.  HE straightens
	himself and looks in the mirror, taking a big gulp of the
	drink.  Eddie sets the glass down and starts out.  Paulie
	hands him a Binaca.  Eddie gives himself a squirt as he
	exits.  Paulie follows.

	INT. P.B. HERMAN'S RESTAURANT - DAY

	It's lunchtime...it's crowded.  Eddie takes a seat at a
	table.  He takes the ring out of his pocket - holds it under
	the table.  Nicolette Karas walks up to Eddie from behind. 
	Gives him a kiss on the cheek.

				NICOLETTE
		Hey, honey.

				EDDIE
		Hey.

	She orders a drink in Greek from the Greek waiter, then sits
	down across the table.  There's a long pause - they just look
	at each other.

				NICOLETTE
		What is your problem?  Why'd you snap at
		me?  I just wanted a statement.

				EDDIE
		I can't...I can't answer you just
		because you want me to answer you!

				NICOLETTE
		You didn't have to embarrass me in front
		of my colleagues.  You could give me
		something.

				EDDIE
		Oh, I'm sorry.  Did I embarrass you,
		sweetheart?  Oh...

				NICOLETTE
		Stop it.

				EDDIE
		Maybe I should just, ya know...turn to
		the cameras and say, do you mind if we
		just work something out?

				NICOLETTE
		Alright, alright, Eddie.  Don't
		patronize me.

				EDDIE
		I'm not.

				NICOLETTE
		Yes you are.  I'm not just some
		reporter.  I don't just stick a
		microphone in your face.  You could give
		me something.

				EDDIE
		Yeah, well you took the camera and put
		it right down on the evidence.  That
		was...

				NICOLETTE
		That was good.  You were holding the
		evidence.

				EDDIE
		You were merciless.  You didn't give a
		shit if you got me or not.

				NICOLETTE
		Well, who was it that taught me how to
		do that?  Huh?

				EDDIE
		You're ruthless.

				NICOLETTE
		You're not so bad yourself.

	They look at each other.

				NICOLETTE (CONT'D)
		C'mere.

	They kiss.

				NICOLETTE (CONT'D)
		Look at this.  You have blood on your
		shirt.  Whose is it?

				EDDIE
		Could be Leon's.

				NICOLETTE
		Jesus.  And last week you came over with
		blood on your shoes.  What am I going to
		do with you?

	Eddie takes her hand.

				EDDIE
		You know, I been thinkin'...these shoes
		might look nice with another pair of
		shoes next to them in the closet.

	She looks at him.

				EDDIE (CONT'D)
		You know, Nicky, I've been married twice
		before.  My first wife was a
		professional woman, didn't have time for
		children.  My second wife...I never
		wanted to go home to her.

	Nicolette's phone rings.  Eddie stops - looks at the ringing
	phone.

				NICOLETTE
		What are you doing?  What are you
		saying?

	Nicolette's phone keeps ringing.  Eddie stares at it.

				NICOLETTE (CONT'D)
		Eddie?

	Nicolette's phone keeps ringing.

				NICOLETTE (CONT'D)
		Don't worry about the damn phone.  I
		won't answer it.

				EDDIE
		Answer the phone.

				NICOLETTE
		No.  Tell me what you want to say.

				EDDIE
		Answer it.

				NICOLETTE
		Okay.  Okay.  Hold that thought just for
		a second.  They only call me when it's
		an emergency.  Just hold that thought.
			(into the phone)
		Can you call back?

				PHONE VOICE (O.S.)
		We need you here in twenty minutes.  Get
		in a cab.

				NICOLETTE
		What're you talking about?

				PHONE VOICE (O.S.)
		Katie.  We don't know where she is.  We
		can't find her.  You gotta anchor the
		5:00.  This is your shot.  Come now.

				NICOLETTE
		What?  Oh.  Okay.  Yeah.

	The line disconnects.  She collapses the phone.  Turns to
	Eddie.

				NICOLETTE (CONT'D)
		Oh my G-d, they want me to anchor.  They
		want me to anchor tonight!

				EDDIE
		That's good.

				NICOLETTE
		Yeah.

				EDDIE
		Well, that's great.

				NICOLETTE
		Okay.  That is great.  But I can't go
		now, we're in the middle of something
		here.

				EDDIE
		No.  Go ahead.  You're gonna be great.

				NICOLETTE
		No.  No, listen to me here.  I want to
		know what you're talking about.  You
		know, the shoe thing and the marriages
		and...

				EDDIE
		I'll tell you tonight.  Let's do it
		tonight.  As soon as you get back we'll
		talk.  We'll talk.

				NICOLETTE
		Promise?

				EDDIE
		I promise.  We'll talk.  You'll be
		great.  You'll be fine.  Go ahead, just
		imagine that, uh... Just look into the
		lens and imagine you're talking to me.

				NICOLETTE
		Yeah.  I'll do that.  As long as you're
		not patronizing me.

				EDDIE
		Patronizing you... Nay, I love you.

				NICOLETTE
		I love you.

	They kiss.

				NICOLETTE (CONT'D)
		Okay, til tonight.

				EDDIE
		Tonight.

				NICOLETTE
		You promise?

				EDDIE
		Yeah.  I promise.

				NICOLETTE
		Okay.  And you know what, I'll swing by
		my place, grab a couple pairs of shoes
		and maybe just test them out next to
		yours...How's that... Would that be a
		good thing.

				EDDIE
		Yeah, yeah.  Good thing.

				NICOLETTE
		Okay.

				EDDIE
		See you later.  Good luck.

				NICOLETTE
		Thank you.

				EDDIE
		Don't be late.

	She walks out.

	INT. FIRE STATION 91 - DAY

	Jordy unlocks the door.  Enters with Daphne.  The fire
	station is empty.

				JORDY
		The men are out of quarters - practicing
		putting out fires.

				DAPHNE
		So...the station is empty?

				JORDY
		Yeah.  This way.

	He gestures toward the stairs.

	INT. FIRE STATION LOCKER ROOM - CONTINUOUS

	Jordy and Daphne walk through the locker room.  Her eyes
	never leaving Jordy's.

				JORDY
		You considered becoming a prostitute?

				DAPHNE
		Yes, I considered it.

				JORDY
		Did you ever turn tricks before?

				DAPHNE
		No.

				JORDY
		What about back home?

				DAPHNE
		No.

	Daphne stops.  Looks at him.  Stands very close.

				DAPHNE (CONT'D)
		I came here.  I had no money.  I knew no
		one.  I couldn't get a job because you
		have to have a green card to get work. 
		They approached me - I could've made a
		lot of money.  I considered it, but...
		it's not who I am.  They pay me below
		the table at Ludwig's.

				JORDY
		So you were never a prostitute?

				DAPHNE
		What are you asking me?

				JORDY
		I'm just trying to find out who you are.

	She looks up into his eyes.  Searching.  Thinking he's
	hinting.

				DAPHNE
		Can you let me go?

	She leans in close to him - giving him the opportunity to
	kiss her.  Jordy is tempted but...remembers Eddie's warning
	and backs up slightly.

				JORDY
		Showers are this way.

	Desperate now, willing to do anything, Daphne moves in even
	closer.

				DAPHNE
		You could shower with me.

	Jordy is locked in her eyes.  Almost giving in.  Then breaks
	away.  Gestures towards the showers. 
	Daphne looks away form him - crestfallen.  She heads to the
	showers.  Jordy follows her into the bathroom.  The walls are
	lined with shower stalls.

				JORDY
		I'll uh, I'll get you a towel.

	He leaves her there.  Alone.  She quickly moves to the
	window.  Opens it.  Looks down.  It's a two-story drop to the
	street.

	JORDY

	gets a towel from the locker room.  His beeper goes off.  He
	checks the number but decides not to return the call.  We
	follow him back into the bathroom.  The shower is on but he
	notices the window.  It's open.

				JORDY (CONT'D)
		Shit!

	He rushes over.  He looks out.  No sign of her.  He turns -
	looks back at the shower.  It's on but he can't see through
	the curtain.  Can't tell if she's there.  He walks over -
	quickly - fearing that she's left.  He pulls the curtain
	aside.  She's crouched in the corner shower stall.  Holding
	herself.  She looks up at him - her eyes filled with tears.

				JORDY (CONT'D)
		Are you alright?

	Jordy sits on the bench next to the shower.

				DAPHNE
		I'm not a whore.  I'm not a whore.

				JORDY
		I know.

				DAPHNE
		You don't know.  I'm sorry.  I was
		desperate.  That's not me.  I shot a
		cop.  Can you imagine what they'll do to
		me when I got to prison?

				JORDY
		They're not gonna send you right back.

				DAPHNE
		I'm sorry.  I didn't mean to...I'm glad. 
		Actually I'm glad it's over.  All this
		time.  Hiding.  Never being able to look
		anyone in the eyes. 
		Always afraid that someone would find
		out who I was.  Never trusting anyone...

	He covers her with the towel, pulling her up.

				JORDY
		You can trust me.

	She embraces him.  Trusting him.  He stands there for a
	moment.  Then awkwardly holds her.  Comforting her.
		
		INT. NYC RESTAURANT - DAY

	CLOSE UP

	on a steak.  Male hands cut a piece.  Another male hand sets
	down a huge bottle of Extra Strength Excedrin.  The hands
	abandon the steak and rip open the bottle.  The CAMERA pulls
	back to include the LCD screen of Oleg's videocamera.  He is
	taping Emil as he rips open the safety plastic with his
	teeth.  Emil is sweating with fever and his eyes are glazed
	over in pain.  He 'drinks' pills from the bottle and chews
	them up.  Wincing in pain.  Emil washes them down with a
	beer.

	Emil looks down and the camera follows his gaze to the
	"People" magazine article he's reading on Stephen Geller. 
	Emil laughs.  Shaking his head at the article as the
	videocamera tilts back up to his face.

				OLEG
		What is it?

				EMIL
		The video of Milos and Tamina - I told
		you to erase it.

				OLEG
		I did.

				EMIL
		And the whore's murder?  You didn't
		erase that either, did you?  Don't lie,
		I won't be angry.

				OLEG
		Why not?

				EMIL
		Put the camera down, Oleg.

	Oleg closes the LCD screen and puts the camera down.  Emil
	removes a small address book -- from Leon's wallet - he looks
	up Eddie Flemming's name.

				OLEG
		What is that?

				EMIL
		What does it look like?  It's an address
		book!

	Oleg jumps up with the camera to tape the book.

				OLEG
		Let me get a shot of it.

				EMIL
		Sit down!

				OLEG
		This way.  Hold it this way.  Good.

	Oleg gets a shot and quickly sits back down.

				OLEG (CONT'D)
		Why won't you be angry at me for keeping
		my movie?

	Emil takes a gulp of beer - drops cash on the table and limps
	away.  Oleg follows.
		

	INT. PRECINCT - DAY

	It's quiet - Chief Duffy paces in front of the Sergeant's
	desk.  Looking at his watch.  Growing more and more
	aggravated as every second ticks by.  Jordy enters escorting
	Daphne.  Sees Duffy and tires to go past him.  Duffy turns
	and sees Jordy and Daphne.

				DUFFY
		Hey.  Warsaw.

	Jordy stops and comes back.  Sitting Daphne down on a bench.

				JORDY
		Hey, Chief, what are you doing here?

				DUFFY
		I came to see how the investigation was
		going.
			(looks at Daphne)
		I called and you're not here.  I wait up
		at the station and you don't even show
		up!!!  I beep you - you don't return my
		call.  Where the hell have you been?!

	Jordy takes a few steps away from Daphne.

				JORDY
		Ladder 20 was on the Rock for training. 
		We stopped there... so she could get
		cleaned up.

				DUFFY
		What do you mean, 'cleaned up?'

				JORDY
		I let her take a shower.

				DUFFY
		A shower!?  Did you take one, too?

				JORDY
		No!  Nothing happened.

				DUFFY
		Oh really.  That's nice.  You took a
		homicide witness to take a shower after
		your partner was shot?  Are you out of
		your fucking mind??  Are you having that
		much trouble gettin' dates?!

				EDDIE (O.S.)
		I told him to take her there.

	Jordy and Duffy turn.  Eddie walks out.  Eddie turns - Tommy -
	the young detective who caught the case in the King Edward
	Hotel - is coming out of the back office.

				EDDIE (CONT'D)
		Tommy, get her outta here.

	Tommy takes Daphne into the precinct.

				TOMMY
		This way, ma'am.

				EDDIE
		There was too much press hangin' around
		there.  I didn't want her face on the
		news.  So I told him to take her to a
		quiet area until things settled down.

				DUFFY
		Oh.

				EDDIE
		It was my decision, not his.

				DUFFY
		Well, I'm the Deputy Chief Fire Marshall
		and every now and then I'd like to be
		included in decisions.

				EDDIE
		Look, after Jordy briefs me, you can do
		the press conference.  How about that? 
		The case is all yours.

				DUFFY
		Oh yeah...?  Alright.

				EDDIE
			(to Jordy)
		I'm ready to be briefed.
			(to Duffy)
		Excuse us.

				DUFFY
			(to Eddie)
		Yeah, sure.
			(to Jordy)
		Beep me when you're ready for the press
		conference.

				JORDY
		Will do, Chief.

	Eddie leads the way, walking past the Sergeant's desk -
	toward the back and to his office.

				JORDY (CONT'D)
		Eddie, I...

	Eddie holds up his hand - silencing Jordy.

				EDDIE
		Wait.

	INT. POLICE PRECINCT - DETECTIVE ROOM'S SQUAD - DAY

	A handful of detectives talk about work over burned coffee. 
	Eddie enters with Jordy.

				EDDIE
		Guys...give me a few minutes?

	They empty out.

				JORDY
		Look, Eddie, I'm tellin' you - I didn't
		touch her.

				EDDIE
		Well, you shoulda because nobody's gonna
		believe you didn't...including me.

				JORDY
		I took her there for a shower and that's
		it.

				EDDIE
		Just a shower?

	Eddie gives Jordy a questioning look.

				JORDY
		Yeah, just her in the shower.  Nothing
		happened.  Look, I'm sure you probably
		think I'm a fool and I fucked up, but...

				EDDIE
		No, I don't think you were a fool, I
		just think you were stupid about it.  I
		mean, to say the least, you outta know
		better.  You don't know her well enough. 
		She's got the potential to fucking hang
		you even if she suggests that you made a
		pass at her, it's fuckin' over.  You can
		deny it all you want, but it will not
		make one fucking bit of difference. 
		You're dead.

				JORDY
		I told you, you know, I thought I was
		doing the right thing, you know, I think
		she's innocent.

				EDDIE
		Well, it's not up to you to decide
		whether she's innocent or not.  Don't
		you understand, that's why you're a
		professional.

				JORDY
		But, I mean, didn't you ever go out on a
		limb for somebody?  I mean, you shoulda
		heard her there.  Tellin' her whole
		story...I believed her.

				EDDIE
		How you go out on a limb for somebody is
		by giving her a number of an Immigration
		lawyer.  Here, here's a number of an
		Immigration lawyer.  That's how you help
		her. 
		But you can't get involved in her like
		that.  You're gonna jeopardize your
		career, your life and you're gonna
		jeopardize my case.  And lemme give you
		another piece of advice.  Maybe you
		don't watch TV but I'll let you in on a
		little secret - the whole fuckin' world
		watches television.  And when you get
		out there, they know your face.  And the
		little fame, the little fuckin' itty
		bitty fame that I get in this city makes
		it a lot easier for my job.  And I get
		more done because of it.

	Jordy studies Eddie for a quiet beat.

				JORDY
		Why'd you help me back there with the
		Chief?  Why'd you stand up for me like
		that?

				EDDIE
		You know, I don't know.  I like you. 
		You remind me of a puppy I used to have. 
		He pissed on the rug all the time, but I
		still kept him.

	Eddie picks up his cigar that's going out.  He sticks it in
	his mouth.  A match is lit.  He looks up.  Jordy holds the
	match.  Eddie dips the end of the cigar and puffs.  The
	homicide detective and the fire marshal hold a look.
		

	INT. EDDIE'S APARTMENT - NIGHT

	Eddie walks in - carrying flowers.  He closes and locks the
	door behind him.  He grabs the phone.  Dials.

				EDDIE
		It's Flemming...anything turn up?  Did
		they check the hospitals?  Airports? 
		Yeah, I hit him!  I fuckin' hit him!  We
		should be all over everywhere - with
		dogs, choppers, everything!  These guys
		are from fuckin' Czechoslovakia...

	He looks at the flowers.  Decides to put the case behind him
	for a moment.

				EDDIE (CONT'D)
		I'll call you later.

	He HANGS up.  Arranges the flowers in a vase.  So they look
	perfect.  Sets them on the coffee table.  Fills out a card,
	writes, "Nicky, I love you. 
	Will you marry me?"  He sticks the card in the flowers -
	turns the lights down low.  Puts a romantic Sinatra song on
	the stereo.  Moves to the liquor cabinet.  Pours himself a
	drink.  He sets the ringbox on the coffee table - next to the
	flowers.  There's a knock at the door.

				EDDIE (CONT'D)
		Coming!

	Eddie smooths his hair, unlocks the door.  But the hallway is
	empty.

				EDDIE (CONT'D)
		Nicky!?!?

	No answer.  Eddie steps out in the hallway with the drink in
	his hand.  Walks toward the elevator.  Doesn't notice the
	shadow that passes behind him - entering his apartment. 
	Eddie turns.  No sign of anyone.

				EDDIE (CONT'D)
		Nicky?!

	He walks back toward his apartment.  Turns and locks the
	door.  A BLUR jumps out of the shadows SLAMMING him on the
	head with a gun.  Eddie tumbles to the floor!  OUT COLD!

	A BLURRED VIDEO IMAGE

	as it's focused - on Eddie - handcuffed and upper body taped
	to a chair - 20 minutes later - sobered up.  Emil is sitting
	in front of him.  On the coffee table alongside him are the
	flowers in a vase.  They've ransacked the place.  Emil has
	Eddie's watch, his gold shield and his money.  He's smoking
	one of Eddie's cigars and in Emil's hand...is the diamond
	engagement ring and card.  Oleg, 60 MINUTES-style, is
	positioned behind Emil videotaping Eddie.  He moves to the
	corner of the room - bringing a light back over to illuminate
	Eddie's face.

				EMIL
		So...who's Nicky?

				EDDIE
		What do you want?

				EMIL
		Your opinion.
			(leaning forward)
		You see, they going to make a movie
		about me, too, Eddie.  And write books.

				EDDIE
			(sarcastic)
		What's your accomplishment.

				EMIL
		I kill someone famous.

				EDDIE
		Then do it, asshole.

				EMIL
		Good - be tough to the end.  Actor who
		plays you will want to die like hero.

	Eddie looks at the videocamera.  Emil answers Eddie's look.

				EMIL (CONT'D)
		So tabloids don't have to do re
		enactments.  They going to have real
		movie this time.

				EDDIE
		If you kill me and film it you're
		putting a noose around your neck.

	Emil turns to Oleg.

				EMIL
		Turn it off.

	Oleg obeys.  Emil turns to Eddie.

				EMIL (CONT'D)
		No.  We are insane.  Who else but crazy
		men would film their murders?
			(gestures to Eddie)
		So we kill someone famous and if we are
		caught, we are sent to mental hospital. 
		But what good is money there?  Because
		once in hospital I say I not crazy. 
		Just pretended to be acquitted.  We see
		psychiatrists.  They must certify we are
		sane and because of your - what is law
		called?
			(Eddie says nothing)
		Oh - I got it.  Because of your Double
		Jeopardy law, we can't be tried for same
		crime twice.  We come out free, rich and
		famous!

				OLEG
		Good idea!

				EDDIE
		You really think you'll be able to fool
		a jury with this bullshit?  How fuckin'
		stupid are you?

				EMIL
		Smarter than Americans.  You're fed cry
		baby talk shows all day long.  Not only
		will Americans believe me, they'll cry
		for me.
			(laughs)
		So...Detective Eddie Flemming, would you
		like to say goodbye to your Nicolette? 
		Maybe you can propose to her now?

	Eddie says nothing.  Just stares at Emil.  Emil puffs on
	Eddie's cigar.

				EMIL (CONT'D)
		Okay.  He has nothing to say.
			(signaling Oleg)
		Start the camera!

				OLEG
		Cut!

	Emil looks at Oleg.

				OLEG (CONT'D)
		This is my project.  I say 'action.'  I
		am the director!  You are the talent. 
		You wait for me to say 'action!'

	Emil looks at Eddie as if to say, "See what I have to put up
	with."  Oleg gestures from behind the videocamera.

				OLEG (CONT'D)
		And...action!

	Oleg FILMS as Emil raises Eddie's service revolver.  Eddie
	suddenly KICKS at Emil's hand, but Emil pulls it away,
	backing out of Eddie's reach.

				EMIL
		Bad last moment - I cut that out.

	Emil raises the pistol again - pointing the gun at Eddie's
	left temple.  Emil cocks the hammer, but Eddie avoids the
	gun, ducking his head to the side of Emil's arm.  Standing
	and following his head up Emil's arm and pushing him over
	into the desk.  Eddie then knocks Emil with the chair and
	Emil falls off the desk and onto the floor.

	Oleg still grips the videocamera.  Eddie continues around
	with the chair and drives Oleg back across the room - pinning
	him to the wall.

	Eddie comes back from Oleg to the gun at the same time as
	Emil is limping for it.  Eddie knocks Emil out of the way
	with the chair and then stabs him with the legs of the chair
	repeatedly.

	Eddie comes up and around again at Oleg who is coming at him
	from the wall.  Eddie knocks Oleg over the coffee table and
	onto the sofa.  Falling on top of him, rolling over and
	leaving Oleg on the sofa.

	Eddie manages to get up from the sofa and position the chair
	in such a way that he can fall over backward and grab the
	gun.  Emil limps toward the gun at the same time and it is
	not clear in the darkness who has the gun.

	Oleg gets up from the sofa and goes over to get the
	videocamera.  Eddie has managed to get the gun and comes up
	as Oleg is moving in with the camera and starts shooting
	toward Oleg - managing to shoot one of the blinds off the
	window and one of the lampshades off the lamp.

	Oleg crouches down with the camera and Eddie starts to turn
	toward Emil who comes at him with the knife and stabs him in
	the stomach.

	Emil steps back, revealing the knife is BURIED IN EDDIE'S
	STOMACH.

	Eddie stumbles backward, falling over but still attached to
	the chair - holding the gun.  Eddie can't believe he got
	stabbed.  Blood swells around his stomach.  He can't be
	dying.  This can't be happening.  He looks at Emil.  The pain
	is terrible.  Oleg has knelt down next to Eddie - getting a
	close up.

	Emil looks at Eddie.

				EMIL (CONT'D)
		Die.  Die.

	Emil looks around.  Grabs a black pillow and finishes Eddie
	off, suffocating him.
		

	BLACKNESS

	We are moving through a tunnel - pitch black, so dark all you
	feel is the motion.  We are travelling very fast.  Finally,
	in the distance, a speck of light which fills the frame. 
	We slowly pull back from the white light to discover it is a
	tiny pixel on a TV screen.

	WIDENING

	further out we see Eddie's funeral on the evening news.  It's
	an enormous gathering - a sea of blue uniforms and
	dignitaries.  In the upper right hand corner, superimposed
	over the funeral, is a picture of Eddie from his ID and in
	his NYPD uniform.  We see Oleg's reflection on the set with
	the videocamera.  He is filming the TV.  We hear the audio
	from Eddie's funeral.

				NEWSCASTER (ON T.V.)
		..Detective Flemming was one of the most
		decorated NYPD detectives in the history
		of New York.  He made several thousand
		arrests during his career, including the
		famed Stephen Geller case.  Beloved by
		the community in which he served.  His
		partner eulogized him...

	Leon is at the mic. 

				LEON (ON T.V.)
		...Eddie was my mentor, my best friend
		and my partner...he taught me the
		meaning of the word 'cop.'  He was a man
		in every sense of the word.  I'll miss
		him...
			(choking on tears)
		Sleep well, brother.

	Leon begins to sing "Amazing Grace."  Oleg PANS from the TV
	and focuses it on a lightbulb.  Hands enter the frame -
	carefully pouring clear liquid into an ashtray.  A long
	hypodermic needle slides into the ashtray - the plunger is
	pulled back and the needle quickly fills with liquid. 
	Gingerly, the needle is inserted into the lightbulb.  Again,
	the plunger moves and the lightbulb is filled and placed on a
	table...next to a CAN OF GASOLINE.  VIDEOCAMERA ZOOMS OUT
	revealing...Emil sitting at a hotel desk doing this.

	INT. P.B. HERMAN'S RESTAURANT - DAY

	It's packed with COPS drinking.  Prosecutors...lawyers...many
	who were at the funeral, including Leon.  All wear the black
	ribbon on their badges.  There's a quality of an Irish wake -
	boisterous, guys cursing...many cops in uniform.  A buffet
	has been laid out.

	Hawkins enters in a black suit, wearing a black ribbon.  He
	greets people, shaking hands, embracing Leon.

				HAWKINS
		Awful...what an awful day.  He was New
		York City.

	Hawkins notices a young man by the window.  Teary-eyed.  It's
	Tommy.  Hawkins nods to him.

				TOMMY
		I never got to tell him how much I
		admired him.

				HAWKINS
		I know, son, I know.  We all loved him.

	Hawkins moves on...greeting others.  He notices at the end of
	the bar - sitting alone on a stool - is Nicolette.  He moves
	to her.  Pulls up a stool alongside her.  She turns, looks at
	him.  Just stares at him for a long beat.  She is bombed. 
	Definitely drunk.  She's had many.  She turns to Hawkins.

				NICOLETTE
		You know...you know he was gonna propose
		to me.  The crime guys found a card he'd
		written out to me.  And a ring
		box...these fuckers that killed him -
		have my ring.  They have my diamond
		engagement ring...

	Hawkins touches her shoulder with compassion.

				HAWKINS
		I know.

				NICOLETTE
		What do you mean you know?  He told you
		he was gonna propose to me?

				HAWKINS
		Well, he...

				NICOLETTE
			(overriding)
		I want to hear everything he said.

				HAWKINS
		I'm trying to tell you.

				NICOLETTE
		Alright.  Go ahead.

				HAWKINS
		That morning.  He was talking to me and
		Leon about marriage.

				NICOLETTE
		Oh my G-d.  We were having lunch here. 
		He started making overtures - talking
		about little shoes next to his in his
		closet but I got a call to anchor - and
		I walked out on him.  I walked out on
		him when he was trying to ask me to
		marry him!!

	Nicolette is crying now.  She angrily wipes away a tear.

				NICOLETTE (CONT'D)
		I'd never had a great relationship
		before.  I'd never made great choices
		with men.  And he wasn't easy to get to
		know.  He was older, my parents told me
		I was nuts to get involved with him. 
		But he was so great to me.  Always
		encouraging, telling me I could do
		anything...
			(beat)
		He was the one.  You know, I'd give up
		everything - everything - for just a
		little more time.  I would've spent
		fifteen minutes with him if that's all I
		knew I had.

	She's lost it.  Hawkins consoles her.  Nicolette shrugs him
	off - turns back to her drink.  Downs the rest of it.  A
	woman arrives, MAGGIE, Hawkins' producer - assistant in tow.

				MAGGIE
		Robert...?

				HAWKINS
		What are you doing here?

				MAGGIE
			(holding a cellular)
		You've got a call.

				HAWKINS
		I can't talk to anybody right now, can't
		you see I'm busy!  I can't talk
		business.  Hang up.  Have a drink.
			(to Paulie)
		Get her a whiskey.

				MAGGIE
		Trust me, you'll want to take this call.

	Robert steps off the stool.  Takes the phone.

				HAWKINS
		Hello?  Who is this?
			(listens)
		How do I know this is you?

	Hawkins gives Nicolette a comforting squeeze on her shoulder. 
	Backs away from the bar.  Now out of hearing distance, he
	looks back at Nicolette and lowers his voice.

				HAWKINS (CONT'D)
		Where?

	We INTERCUT Emil on a public phone in the lobby of a movie
	theater.  Oleg videotapes Emil on the phone, as he throws
	glances into the theater.

				EMIL
		Come to 45 Broadway.  Don't bring the
		Police.  Come alone or you'll be in my
		next film.

				HAWKINS
			(low)
		Look asshole.  I've been threatened by
		better than you.

				EMIL
		No.  I'm the best that's ever threatened
		you.

				HAWKINS
		I'll meet you on one condition - I get
		exclusivity and you surrender to me.

				EMIL
		We'll talk about that.  Four o'clock
		gives you time to go to bank.  Three
		hundred thousand dollars.

				HAWKINS
		What?  It doesn't work that way.

				EMIL
			(incensed)
		If you don't want my film - I'll call
		another show.  And they will show it.

				HAWKINS
		Wait a minute.  Wait a minute.

				EMIL
		Come alone.  Bring cash.  And we'll talk
		about surrendering.

	CLICK.  The line goes dead.  Hawkins disconnects.  Hands the
	phone back to Maggie.  She's looking at him.  Excited. 
	Hawkins looks at Nicolette.  His mind whirls.

	INT. FIRE STATION 91 - KITCHEN - DAY

	Daphne and Korfin are sitting at a table.  Korfin's arm is in
	a sling, his side bandaged.  Duffy and Jordy enter in their
	dress uniforms.  Korfin walks over to them.

				KORFIN
		How was it?

				JORDY
			(numb)
		Not good.

	Jordy's quiet.  Dazed.  Nobody can believe Eddie's gone.

				DUFFY
			(nods to Daphne)
		Did the D.A. videotape her deposition?

				KORFIN
		Yeah.  He finished awhile ago.

				DUFFY
			(to Korfin)
		Alright.  Swing by her apartment.  Let
		her pick up her clothes and take her
		straight to Hoover Street.  You got
		that?

				KORFIN
		Yeah.

	Jordy looks at her.  Duffy sees them hold each other's look.

				JORDY
		Chief - mind if I take her?

				DUFFY
		Okay.  But not water sports.

	Duffy walks out.  Jordy leads Daphne out of the station. 
	Korfin follows.  A MAN IN A CHEAP SUIT is talking to Camello
	who points as Jordy walks by.  The man chases after Jordy.

				MAN
		Excuse me - Jordan Warsaw?

				JORDY
		Yeah.

				MAN
			(shoving papers in Jordy's
			 hand)
		Consider yourself served.

	Jordy opens the papers.  Korfin puts Daphne in the car. 
	Walks back over to Jordy and reads over his shoulder.

				KORFIN
		Zwangendaba??? Is suing you, the
		department and the city of New York for
		10 million?  Who is Zwangendaba?

	Jordy remembers...and gets more depressed.

				JORDY
		The mugger.
						
		EXT. DAPHNE'S APARTMENT BUILDING - NIGHT

	It's an old brownstone - in poor condition.  Jordy pulls up. 
	Opens the door for Daphne - takes her by the elbow - steering
	her to the door.  He is edgy.  Jumpy.  Looking around.

				DAPHNE
		Are you alright?

				JORDY
		I still can't believe Eddie's gone.

				DAPHNE
		I'm sorry.

	He looks at her.  Nods.  They walk up to the stairs as the
	front door opens.  A NEIGHBOR exits, shocked.  Jordy pulls
	Daphne out of the way.

				DAPHNE (CONT'D)
			(in Czech to the man)
		Hello.  How are you?

	INT. DAPHNE'S APARTMENT BUILDING - HALLWAY - CONTINUOUS

	Jordy and Daphne make their way up the stairs.  A bouquet of
	flowers are outside Daphne's apartment.

				JORDY
		What's this?

	She takes the card.  Jordy looks over her shoulder.  Daphne
	reads: "Good luck with all your troubles.  I'm here if you
	need me...Ludwig."

				JORDY (CONT'D)
		Is he your boyfriend?

				DAPHNE
		Ludwig?  He's gay - are you jealous?

				JORDY
		If I was your boyfriend, I might be.

				DAPHNE
		If you were my boyfriend, I'd suggest
		you find another girlfriend that isn't
		going to jail ten-thousand miles away.

	They're staring in each other's eyes.  The sexual tension
	strong.

				JORDY
		A good Immigration lawyer could stall
		the process.  Eddie recommended one.

				DAPHNE
		No matter what happens...I'm glad I met
		you.

				JORDY
		I'm glad I met you.

	They hold each other's eyes...then suddenly they kiss. 
	Urgently.  Passionately.  Somebody is coming up the stairs. 
	They part quickly.  A tenant enters his apartment down the
	hall.  Jordy clears his throat.

				JORDY (CONT'D)
		Let's get your stuff.

	He opens the door.  Peers inside - checking it out.  Turns to
	her.  Gestures that it's okay to enter.

	INT. DAPHNE'S APARTMENT - CONTINUOUS

	It's very small.  Almost no furniture.  The bare minimum. 
	The apartment is a hole.  She looks at Jordy.  Both thinking
	the same thought.  Another kiss. 

				JORDY
		You better get packed.

				DAPHNE
		Right.

	She holds his look.

				JORDY
		Do you have coffee?

				DAPHNE
		In the kitchen.

				JORDY
		I'll make some for us.

				DAPHNE
		I'll get my clothes.

	She heads down the hall.  Jordy enters the small kitchen.  He
	flips on the kitchen light and the LIGHTBULB EXPLODES -
	SETTING THE CEILING ON FIRE AND RELEASING A RAIN OF FIRE INTO
	THE ROOM.  Jordy JUMPS BACK.

				DAPHNE (CONT'D)
		Jordy!!!

				JORDY
		No!  Get back!  GET BACK!!!

	Jordy's more surprised than shaken.  It's a fire - he knows
	the drill.  He pushes her into the living room.  Then notices
	a FIRE EXTINGUISHER hanging on the wall.  Grabs it.  Aims it
	at the FIRE spreading in the kitchen.  He SPRAYS as Daphne
	SCREAMS!

				DAPHNE
		That's not mine!

	WHOOOOOOOOOSH!  The fire extinguisher FEEDS THE FIRE!  Flames
	leap up from the fire - shooting toward the extinguisher
	because it's filled with gasoline.  The handle LOCKS!  Jordy
	CAN'T TURN IT OFF.  Flames engulf the extinguisher and
	JORDY'S HAND.

	He flings the extinguisher - BACKS OUT OF THE KITCHEN. 
	Closes the door.  Jordy takes off his jacket.  Stuffs it
	under the bottom of the door.  Blocking the smoke.  He
	hurries into the living room.  Knowing it's moments before
	the extinguisher will explode.  Jordy pulls out his cellular. 
	Hits the speed dial as he notices Daphne about to throw a
	chair through the window.

				JORDY
		Don't!  It'll suck the flames toward us!

	Too late.  She SMASHES the window.  There's an EXPLOSION in
	the kitchen.  Smoke and fire rush down the hallway and along
	the ceiling.  Jordy yells into the phone:

				JORDY (CONT'D)
		This is Jordan Warsaw!  We got a 1075,
		make it quick, we're trapped!  8th
		Avenue and 44th Street.

	He pulls Daphne toward the bedroom.  It's locked.  Jordy
	kicks it open.  Grabs the comforter off the bed.  Shoves that
	under the door jam.  He pulls Daphne into the bathroom. 
	Shuts the door.  Runs his severely burned hand under the cold
	water.  Daphne looks out the window - hearing the sirens. 
	She notices someone has nailed the window shut.  And on top
	of one nail...is Eddie's gold shield.

				DAPHNE
		Oh my G-d!  Oh my G-d!

	Jordy turns - sees Eddie's shield.

				DAPHNE (CONT'D)
		They were here!

	This freaks her out.  They were in her home.  She starts to
	panic.

				JORDY
		Calm down.  Get a hold of yourself!  Get
		down!

	He pulls aside the curtain to the bathtub.  In it is a CAN OF
	GASOLINE.  A virtual bomb.

				JORDY (CONT'D)
		Oh Jesus!

	Daphne reaches for the can of gasoline.

				JORDY (CONT'D)
		What are you doing?

				DAPHNE
		Pouring it out!

	She grabs the can of gasoline - pours it down the drain.  The
	FIRE is raging outside the bathroom.  The bathroom door is
	beginning to smoke and burn.  They are trapped.

	Jordy turns - grabs an exposed water pipe that runs up the
	wall to the ceiling.  He throws his feet against the wall for
	leverage.  Pulls with all his might to break it loose.  It's
	creaking - but he's having a hard time with it.

				DAPHNE (CONT'D)
		Oh shit!

	Jordy looks over.  The gasoline she's pouring out - is not
	going down the drain.  It's stopped up.  As soon as the fire
	gets in the bathroom, everything will explode!

	Jordy begins pulling at the rusty pipe with all his might. 
	Daphne comes over - helps him.  Both of them trying to break
	it off.  Suddenly it snaps and water POURS into the room. 
	SOAKING THE WALLS.  They point the pipe toward the door,
	soaking some of the flames which are consuming the door. 
	Trying to stop the fire from coming in.  He and Daphne are
	drenched.  And trapped.

	Jordy grabs a broken piece of pipe.  Starts SMASHING the wall
	behind them.  The wall to the adjacent apartment.

	VIDEO POV

	Jordy and Daphne in the bathroom - surrounded by fire. 
	CAMERA WHIP PANS down the street as FIRE ENGINES arrive.

	OLEG

	is VIDEOTAPING them from the opposite rooftop.  Tenants from
	Daphne's building are fleeing down the fire escape.  Emil
	stands in back of Oleg - who is very excited.  He turns the
	camera on himself.

				OLEG
		This is great film!  You can see fire
		right now - Daphne is in fire - Fire
		Marshal is here.  Everything is so
		messy.  Everything is so crazy right
		here!  Look at this fire!  We made it! 
		90% of people who die in fire die from
		eating smoke.  So most likely they all
		die from eating smoke.

	The CAMERA PANS to Emil.

				OLEG (CONT'D)
		And this is the man who started the
		fire.  Say something to your fans, Emil!

	Emil waits a beat and then blows a kiss to the lens.

	DAPHNE'S BATHROOM

	Filled with smoke.  You can barely see Jordy or Daphne. 
	Jordy SMASHES a hole in the wall - which reveals the bathroom
	in the apartment next door.  The smoke has a place to escape. 
	There's a 7-year old KID in there.  Standing in the bathroom. 
	Terrified.

				JORDY
		Get back!  Get out of the bathroom! 
		Run!

				7-YEAR OLD KID
		The hallway is on fire!

				JORDY
		It's okay.  I'm a fireman.  I'm going to
		help you.  Get back!  Now!

	Jordy pushes Daphne through the wall - turns as the bathroom
	door catches fire.  It's seconds before the whole room will
	blow up.

	OLEG

	Across the roof is videotaping the bathroom as it EXPLODES!

	EXT. STREET - CONTINUOUS

	Fire engines have arrived.  The street is filled with
	gawkers.  Garcia and Korfin pull up just as Jordy runs from
	the building - holding the kid in one arm and pulling Daphne
	with the other.  Carefully guarding his bandaged hand.  A
	fireman grabs the kid.  Another grabs Daphne.  Garcia and
	Korfin run to Jordy.

				GARCIA
		Jordy!  What the hell happened?!

				KORFIN
		Are you alright, man?  Lemme see the
		hand!

				JORDY
		Where's Daphne?  Daphne?

	He spots Daphne on the corner as a familiar voice pushes
	through the crowd.

				VOICE
		Isn't she a beauty?  She's my fire, look
		at that loom-up on her!

	Jordy turns - it's Max.  The attention pyromaniac who Jordy
	threw out of his office.  As a news crew arrives, Max turns
	to the cameras.

				MAX
		I did this!  I did this!  Take my
		picture!  I'm Max!  Max Gornick!

	Jordy grabs Max - pushes him away.

				JORDY
		Get outta here!

				KORFIN
		What the hell happened?

				JORDY
		They were inside.  They booby trapped
		her apartment!

	Korfin scans the crowd.  Looking for Emil and Oleg.  In the
	b.g., Duffy is SCREAMING.

				DUFFY
		What the hell are you talking about??? 
		They're gonna do what?

	Jordy and Korfin turn.  The Chief has a phone to his ear and
	is freaked.

	INT. LOBBY OF CHANNEL 12 BROADCASTING - NIGHT

	JORDY'S POV

	as he enters the TV station.  His clothes burnt and still
	wet.  The lobby's full of ANGRY COPS.  Tommy and Leon, still
	in his funeral suit, SCREAMING above them all at Maggie the
	producer and her ASSISTANT, who are standing behind the desk.

				TOMMY
		Where is he?!  Where is Hawkins?!

				MAGGIE
		He's not on the premises!

				LEON
		I want the tape.  Go get it and bring it
		here this minute.

				MAGGIE
		Any request for the video must be
		directed to "Top Story's" attorney -
		Bruce Cutler.  I'll be happy to give you
		his number.

	Leon jumps over the desk where Maggie stands.  Tommy pushes
	past the security guard to follow Leon.  They continue toward
	Maggie, pushing her further back into the office.  She tries
	to protect herself with an office door which Leon slams open.

				LEON
		Lady, if you put Eddie's murder on TV,
		I'll get a warrant for your arrest and
		shove it so far up your ass it'll come
		outta your mouth!

				MAGGIE
		I want your shield number!

				HAWKINS (O.S.)
		Viewer discretion advised!

				MAGGIE
			(pointing at the TV)
		You want the tape?  There it is!

	Leon, Tommy, all the cops and Jordy - turn toward a TV set
	which is mounted in the lobby.  The "Top Story" logo flashes
	on the screen, then Robert Hawkins is seen behind his desk.

				HAWKINS
		What we are about to broadcast is very
		graphic footage...

	Everyone is riveted.  But Jordy notices outside...a "Top
	Story" NEWS VAN is waiting in the alley.  Robert Hawkins
	jumps from a doorway and into the van.  Jordy backs out.

	INT. PLANET HOLLWYOOD - NIGHT

	POP...a video POV of a bottle of Crystal as the cork is
	popped.  The videocamera pans up to Emil sitting at the
	table.  He nods at the waiter who leaves.  Emil raises the
	glass - looking into the lens.

				EMIL
		America!  Who says you can't be success
		in America?  I arrived with nothing,
		knowing nobody - now look - I am a
		success story!

	The videocamera is lowered.  Oleg turns it off.  Asks
	suspiciously.

				OLEG
		You are success story?  I am success
		story!  Why do you say I and not we?

				EMIL
		Oleg, don't be paranoid.  You got a
		hundred-fifty thousand dollars, didn't
		you?  I gave you half of what they gave
		me.  Look - here we are!

	Emil gestures toward the big television set.  We are in
	Planet Hollywood - where diners and those by the bar can
	watch a huge screen hanging from the ceiling.  Robert Hawkins
	is introducing his show.

				HAWKINS (ON T.V.)
		Good evening.  Welcome to "Top Story". 
		Tonight, I present to you material of a
		graphic and violent nature never before
		seen on television.  And I do so with a
		heavy heart.  You will be first-hand
		witness to the slaying of celebrated New
		York City Homicide Detective, Eddie
		Flemming.  It would be only normal to
		ask, why?  Why are we showing something
		so journalist, I must show it.  A
		democracy survives through the freedom
		of its media, and if we cannot see what
		is happening then we don't deserve our
		democracy, or our freedom.  Eddie
		Flemming was my friend.  I cried when I
		watched this footage and vowed to fight
		this violence with every molecule of my
		being from this day onward.  Hopefully,
		this will have a similar effect on you. 
		One final word, this material is
		absolutely not appropriate for children.

	The restaurant BUZZES.  Emil checks his watch.

				OLEG
		In movie they make of us, who do you
		think would act me?

				EMIL
		The one who got caught in the bathroom.
			(beat)
		George Michael.

	Emil laughs.  Oleg doesn't.

				OLEG
		I'm serious.

				EMIL
		Shut up.  Look!

	Emil points towards the TV.  "Top Story" is continuing.  The
	scene cuts to Emil's video footage.  Eddie is handcuffed to
	the chair.  The light illuminating his face.

				OLEG (O.S.)
		This is my project.  I say 'action.'  I
		am the director!  You are the talent. 
		You wait for me to say 'action.'
			(beat)
		And 'action!'

				EMIL
		Bad last moment - I cut it out.

	Emil looks at Oleg - furious.

				EMIL (CONT'D)
		I told you to cut that out before we
		handed in the tape!

				OLEG
		Be quiet.  Watch.

	Oleg watches the big-screen TV as Emil raises the pistol to
	Eddie's temple.  Eddie pushes him over the desk.  Eddie then
	knocks Emil with the chair and Emil falls off the desk onto
	the floor.  Eddie continues around with the chair and drives
	Oleg back across the room - pinning him to the wall.  Eddie
	and Emil both go for the gun.  Eddie knocks him out of the
	way.  Stabs him with the legs of the chair repeatedly. 
	Leaves him in a ball on the floor.  Oleg comes at Eddie and
	he knocks Oleg over the coffee table and onto the sofa.  The
	blinds and lamp shade are shot - bathing the room with more
	light.  Emil stabs Eddie in the stomach.  Oleg kneels down
	for a CLOSE-UP.

				EMIL
		Die.  Die.

	EXT. TIMES SQUARE - CONTINUOUS

	Hawkins' van drives across Times Square.  Jordy's car
	following.  We WIDEN OUT... Eddie's murder is being broadcast
	on the JUMBOTRON in Times Square.  People stare up - stunned.

	INT. PLANET HOLLWYOOD - CONTINUOUS

	The dinner patrons are watching TV.  Shocked.  Emil glares at
	Oleg.

				EMIL
		Why did you leave that stuff in about
		you being the director?

				OLEG
		Because I am the director.  Don't you
		realize, if it wasn't for my film, for
		my talent, my idea to do this - no way
		would we be sitting here right now.

				EMIL
		Your idea?  I thought it was my idea.

	Oleg tenses.  Emil laughs.

				EMIL (CONT'D)
		Aren't you just the cameraman?

	Oleg doesn't laugh.

				OLEG
		I'm serious...this - this is a great
		American film.  Full of violence and
		sex.  And I want my credit.

				EMIL
		Credit?

				OLEG
		Yes.  Before we hand in the next video -
		I put titles on it and my credit is
		going to read - Directed by Oleg Razgul.

				EMIL
		Yes.  But there's only one problem - you
		want credit but the problem is - I don't
		share credit.

	Oleg is pissed.

				EMIL (CONT'D)
		You got that?

				OLEG
		No, I don't get that!

				EMIL
		You think you are a director?  You are a
		fucking little, small Russian piece of
		shit.  And I hate you.  I fucking hate
		you.

	Emil slaps Oleg across the face.  Oleg stands up.  Emil
	suddenly pulls out Eddie's gun but before he can pull the
	trigger, Oleg STABS Emil in the arm!  Emil squeezes off a
	shot through the crowded restaurant.  Patrons SCREAM - Oleg
	runs through the restaurant, escaping.  It's chaos. 
	Hawkins arrives with a crew and with BRUCE CUTLER, a
	confident, tough criminal attorney.

	Emil pulls the steak knife out of his arm, picks up a napkin -
	pressing it to his wound.

				EMIL (CONT'D)
		Oh, hello.

	Cutler accesses the situation.

				EMIL (CONT'D)
		Are you my attorney?
			(extends his hand to Cutler)
		I'm Emil.  I'm insane.

				CUTLER
		I'm not your lawyer until I see the
		money.

				EMIL
		Here.  I have your money.

	Emil picks up a briefcase and hands it to Cutler.  Cutler
	opens it - inside is the cash Emil got from Robert Hawkins. 
	Emil looks at the table, pushing the plates and silverware
	aside.  Emil looks under the table, throwing the chair aside,
	freaking.  He's lost the most important thing in his life.

				EMIL (CONT'D)
		Oh no!  No!  Shit!

				CUTLER
			(follows Emil - reaching out to
			 him)
		Emil.  Take it easy.  Stay with me.  Sit
		down.  What do you need?  What are you
		looking for?

				EMIL
		He has the camera!  He took the movie!

	Jordy comes in, gun raised.

				JORDY
		Don't move!  Don't move!  Get your hands
		up!  Drop it!

	Emil puts his hands in the air.  Immediately drops the gun!

				EMIL
		I give up!

	Jordy is disappointed!  He didn't want to take Emil alive. 
	Hawkins signals to his camera man, who swings his camera at
	Jordy as he approaches Emil, his gun aimed at Emil's head.

				CUTLER
		This man is unarmed, officer.  He's
		surrendered.

	Jordy cracks Emil across the face - knocking him down.

				CUTLER (CONT'D)
		What are you hitting him for?

				JORDY
		Turn that camera off!

	Jordy handcuffs him.  Emil turns to the camera for sympathy,
	appearing more hurt than he is.

				EMIL
		No.  Keep filming...

	Jordy realizes how media savvy Emil is and understands in
	that moment why he's surrendering.  Jordy yanks Emil up -
	dragging him across the restaurant floor - Emil still
	favoring his ankle.

				CUTLER
			(to Emil)
		Don't say anything.

				EMIL
		Where are we going?

				CUTLER
		I'm coming with you.

				EMIL
		Yes.  Yes, come with me!

				CUTLER
			(to Jordy)
		I'm invoking rights - this man is
		represented by counsel.  I'm coming with
		him.

	The "Top Story" crew is all over them, filming everything. 
	Cutler stays close to Emil.  Making sure he's in the video
	footage.

				JORDY
		Turn that camera off!

	EXT. PLANET HOLLWYOOD - CONTINUOUS

	As Jordy comes out with a limping Emil, police are arriving. 
	Tommy, Leon and Murphy run over as Jordy opens the back door
	to his car.  Leon grabs Emil.

				LEON
		I'll take him.

				JORDY
		No way!  He's mine!

				LEON
			(holding on to Emil, squeezing
			 his arm hard)
		We're takin' him.  Don't argue!

				JORDY
		He's my collar!

				LEON
		Well, he killed my partner!

				JORDY
		He's yours but I take him in!  I'll
		drive him to the precinct, you can have
		him but I'm walkin' him in.

	Leon realizes Jordy wants to be seen on TV taking Emil into
	custody.

				LEON
		Okay, kid, have your 15-minutes.  I'll
		follow you.  Tommy, you ride with him!

	Leon stares hatefully into Emil's eyes.

				LEON (CONT'D)
		You're goin' down, motherfucker, you are
		goin' down.  I'll be there with a smile
		when they put you down!

	Cutler hurries to Emil's side.

				CUTLER
		Don't say a word.  Don't respond to his
		taunting!
			(to Leon)
		He's represented by counsel.  You want
		to speak to someone - you speak to me!

				TOMMY
		Out of the way, counselor.

	Tommy shoves Cutler aside.

				CUTLER
		Don't you put your hands on me,
		Detective.

	Jordy pushes Emil in the back seat and slams the door.  Leon
	turns to Hawkins, whose cameras are filming everything.

				LEON
		And you, you'll pay for what you did!

				HAWKINS
			(low)
		This footage will work in your favor. 
		When the jury sees this - no matter what
		Cutler tries, they'll convict him.

	Leon looks at him. This man used to be his friend.

				LEON
		You outta be ashamed.  Ashamed of
		yourself.

				HAWKINS
		If I didn't put it on somebody else
		would!  I was his friend!

				LEON
		Don't give me that fucking shit.

	The cameras are rolling.

				MURPHY
		Don't get into it on TV.

				LEON
			(yells to other cop cars)
		Alright, let's get going!

	Leon and the other cops rush to their cars.  Jordy is already
	behind the wheel.  As soon as Tommy jumps in the passenger
	seat, Jordy takes off.  The cameras film him driving away.
		
	INT. JORDY'S CAR - NIGHT

	Jordy takes a left turn, racing away.  Running all the
	lights.

				TOMMY
		What are you doin'?  You're gonna lose
		everybody!

	Jordy rips through another turn, heading toward the West Side
	Highway.  The car speeds up the ramp and races up the left
	lane - having lost the police.

				TOMMY (CONT'D)
		Where are you goin'??  This ain't the
		way to the station!

	Jordy looks up at Emil in the rear view mirror.

	EXT. WEST SIDE HIGHWAY EXIT - CONTINUOUS

	Jordy pulls off on 130th Street.  They are way uptown in the
	middle of nowhere.  The car drives down a dark street.  
	Crumbled, vacant buildings dominate the streets and there are
	no people around.

	EXT. DESERTED STREET - CONTINUOUS

	The car slows down.  Tommy watches Jordy, realizes what's
	going on.  Jordy stops at a dead end.  Pulls open the back
	door, yanks Emil out and starts to drag him up into the
	deserted tunnel.

				TOMMY
		Jordy...??? Listen to me.  You can't do
		this.  This isn't the way to do things.

	Jordy ignores Tommy, slamming him up against the tunnel wall.

				JORDY
		Were you a fireman?  That how you knew
		how to rig the apartment?

				EMIL
		My father was.  He gave me many lessons
		about fire.  Now it's my friend.

				JORDY
		Tommy, take a walk.

				TOMMY
		What are you gonna do?

				JORDY
		Don't you get it?  He knew he was gonna
		get caught!  That's why he videotaped
		Eddie's murder - he thinks he's gonna
		get off.

				TOMMY
		Don't stoop to his level!

	Jordy tosses the car keys to Tommy.

				JORDY
		Take the car.  Get outta here, Tommy.

				TOMMY
		Look, you can't shoot him in cold blood.

				JORDY
			(erupting)
		GET OUTTA HERE NOW!!  GET IN THAT CAR
		AND DRIVE AWAY!!!  DO WHAT I SAY OR I'LL
		KILL YOU, TOO!!!

	Tommy nervously backs up toward Jordy's car.  Climbs behind
	the wheel and drives away, leaving Jordy and Emil alone in
	the darkness.  Jordy takes out Eddie's pistol.  The one Emil
	took from Eddie.  Jordy opens the cylinder - two bullets
	left.  Jordy snaps the cylinder shut, tucks Eddie's gun in
	Emil's belt.  He drags Emil away from the wall, into the
	center of the empty space - unlocks Emil's handcuffs and
	throws them aside.  Still holding the gun on Emil, he circles
	around to face him.

				JORDY (CONT'D)
		Get your hands up!  Get your hands up!

	Now facing Emil, he sticks his gun in his waistband - the
	same place he put Emil's.

				JORDY (CONT'D)
		You wanna be a real American?  Go for
		your gun.

	Emil holds his arms out - making it clear he's not going for
	the gun.

				JORDY (CONT'D)
		Pull the gun!  You want to be famous? 
		Shoot me, you'll get more headlines and
		make more money.

	Emil watches Jordy...a slow grin spreads across his face.

				EMIL
		You can't kill me.  You're not a cop. 
		Just fireman with a gun.  I bet you
		never shot anybody in your life.

				JORDY
		You'll be my first.

	Jordy pulls out his 9mm and pushes the barrel right between
	Emil's eyes.

				EMIL
		C'mon.  Pull the trigger.  Do it.  Oh,
		look, you're sweating.  You don't have
		the balls.

				JORDY
		Get down on your knees.

	Emil gets on his knees and starts to sing in Czech.  SIRENS
	fill the air.  Police cars come flying down the street.

				JORDY (CONT'D)
		Where's your partner?

				EMIL
		The Sheraton!  On Broadway!  Room 210. 
		Go get Oleg.  He'll kill you.

	Leon runs up.  Tommy's relieved to see Jordy didn't kill
	Emil.

				LEON
		Gimme your gun, Jordy.  We all want him
		dead but you can't do it this way.

	Emil is still smiling.  Jordy suddenly slams Emil in the
	face.  Knocking him to the floor.  He jumps in his car and
	speeds away.
		
		INT. BROADWAY SHERATON - 2ND FLOOR HALLWAY - NIGHT

	A room service WAITER wheels a tray with a magnum bottle of
	Crystal, with three glasses, toward Oleg's room.  Jordy
	follows behind him - gun aimed at his back.

				WAITER
		Do you really need me?

				JORDY
		Keep your mouth shut.  Don't mess this
		up.

	They reach the room.  Jordy flattens himself against the
	wall.  The waiter KNOCKS.

				HOOKER'S VOICE
		Who's there?

				WAITER
			(nervous)
		R-room service.

	A HOOKER, wrapped in a towel, opens the door a crack, looking
	out at the waiter.

				HOOKER
		Come in.

	Jordy whips around the corner - pointing his gun and pushing
	the hooker back out of the room.  Jordy moves to the bedroom
	door.  Peers through the crack.  Oleg sits on the edge of the
	bed in his skivvies with two naked prostitutes.  He's hooked
	up his videocamera to the TV set and is showing them his
	footage of the fire.

				OLEG
		Look at that.  See that shot!  Seamless. 
		No cuts.
			(excited)
		And look.  Look at that transition. 
		That's filmmaking!!  Isn't it great?!

	Jordy KICKS in the door - gun raised.

				JORDY
		Don't move!

	Oleg grabs the videocamera.  Has on hooker in a head lock and
	picks up the other one.  He rushes at Jordy - using one of
	the hookers for protection.

				JORDY (CONT'D)
		Drop the girl!  Drop her!!

	Oleg pushes the hookers at Jordy - knocking Jordy back into
	the living room and over the back of the sofa.  Oleg rushes
	out into the

	HOTEL HALLWAY

	Oleg runs to the fire exit - Jordy follows, chasing Oleg down
	the stairwell.

	EXT. BROADWAY - NIGHT

	Oleg bursts out a door which opens onto Broadway.  He runs
	through the crowd - knocking pedestrians aside!  Jordy chases
	him, gun in hand!

	Oleg runs into the street, darting in and out of traffic,
	cars braking to a stop.  One SLAMS into another. 
	Jordy leaps over a car, closing in on Oleg.  People gawk. 
	Even in New York, it's odd to see a man being chased in his
	underwear.  Oleg runs, knocking people aside.  He's holding
	the camera in his hand.  It's on.

				JORDY
		STOP!  STOP THAT MAN!

	A UNIFORMED COP turns as Oleg runs right into him.  Knocking
	him down.  Oleg beats him, takes his gun and runs into:

	INT. MOVIE THEATER LOBBY - CONTINUOUS

	Oleg, gun in hand, runs past the TICKET TAKER at the door.

				TICKET TAKER
		Hey, come back here!

	The ticket taker runs after Oleg who continues past the candy
	counter.  Jordy rushes in the door.

				JORDY
		Where is he?  Where'd he go?

				TICKET TAKER
		Middle door.

	Jordy continues running through the lobby - past the middle
	door - and enters the theater through the far door.

	INT. MOVIE THEATER - NIGHT

	Jordy enters the theater, crouches down in the aisle.  It's a
	night scene, the theater is dark.  Jordy tries to see faces. 
	He cuts through a row of seats to the middle aisle.

				DRUNK'S VOICE
		Kill him!  Kill the bastard!

	Jordy spins toward the voice - it's a DRUNK.  Others start
	YELLING for blood!

				AUDIENCE
		Shoot him!  SHOOT!

	A GUNSHOT!  Jordy ducks!  Another GUNSHOT!  Jordy realizes
	the shots are coming from the screen.

				OLEG
		Look!  Over here!

	Jordy turns.  Oleg stands up and FIRES at him - trying to
	film Jordy's death with a videocamera. 
	Jordy ducks, then rises up with his gun as Oleg vaults over
	the seats, leaping from one to the other, mashing shoulders
	and heads, bounding for the screen.

				JORDY
		Everybody down!  Stay DOWN!

	Jordy FIRES as the screen villain blasts away.  Some in the
	audience don't realize the real thing is happening.  Oleg
	leaps on the stage in front of the screen, illuminated by it. 
	Jordy runs down the aisle.  Oleg FIRES at Jordy.  Jordy FIRES
	back.  People panic - scurrying away - Jordy can't get a
	clear shot.  Oleg FIRES again, wounding a moviegoer.  Jordy
	raises up as the theater lights go on...and Oleg is gone! 
	Jordy jumps on the stage - runs backstage - Oleg has
	disappeared.

				JORDY (CONT'D)
		Shit!

	SIRENS are heard from outside.  VOICES of cops are heard as
	they enter.

	CLOSE ON TV

	A REPORTER is in Times Square, reports from outside the movie
	theater.

				REPORTER (ON T.V.)
		...and the wild chase through Times
		Square ended with the suspect, Oleg
		Razgul, escaping.  The fire department
		has identified the fire marshal involved
		in the failed pursuit as Jordy Warsaw.

	The channel is changed.  PETER ARNETT is reporting the same
	story.

				PETER ARNETT (ON T.V.)
		In a related matter, Mr. Slovak's
		attorney, Bruce Cutler - famous for
		handling sensational cases - claims his
		client is unfit to stand trial.

	INT. JAIL CELL - WIDER - DAY

	Daphne sitting on a bench in a jail cell.  Watching TV
	through the bars.  She is in the fire department's holding
	cell in Brooklyn.

				PETER ARNETT (ON T.V.)
		In fact, Cutler claimed Mr. Slovak was
		not the alleged mastermind behind the
		murders. 
		According to Cutler, Mr. Slovak was
		being directed by his partner, who
		threatened to kill him if he didn't
		follow Mr. Razgul's orders.  Cutler told
		reporters today that Mr. Razgul did in
		fact stab his client.

	The scene CUTS TO Cutler's press conference.

				CUTLER
		My client, Mr. Slovak, is a victim. 
		What's happened is not his fault.  Emil
		was under the influence of his partner. 
		At the trial, you'll see that my client
		will be vindicated...

	INT. BELLEVUE - MENTAL OBSERVATION UNIT - DAY

	The CAMERA WIDENS from the TV set.  We are now in an
	interview room, a guard is posted outside the room.  Emil
	sits at a small table - with Cutler.  Emil is dressed in
	Bellevue clothes.  He's handcuffed and his ankle is bandaged. 
	Emil gives a complimentary nod toward Cutler.

				CUTLER
		I brought you some letters.  It's really
		fan mail.  Women mostly.  One wants to
		buy you clothes, another sent a check. 
		Another wants a check.

				EMIL
		You bring the cigarettes?

				CUTLER
		Oh, sure.

	Cutler shakes a cigarette out of the pack, stuffs it in
	Emil's mouth and lights it for him.  Emil has never smoked
	before.

				CUTLER (CONT'D)
		How're they treating you, alright
			(Emil is nonresponsive)
		I want to get the cuffs off... but
		there's a little bit of a problem. 
		Things out there are very negative right
		now for us.  We gotta change that
		around.  Perception is very, very
		important.  Perception is reality.  I
		know you're not fuckin' crazy.  But it's
		important that I get that message out. 
		Cause that's our only defense in this
		case.

	Emil leans forward.  Cutler retrieves the cigarette from
	between his lips.

				CUTLER (CONT'D)
		I want you to focus on three things:
		fear...

	He puts the cigarette back in Emil's mouth.

				CUTLER (CONT'D)
		...delusions and paranoia.

				EMIL
		I was all of these.

				CUTLER
		Well, you didn't appreciate the severity
		of it until recently.  No question about
		that.

				EMIL
		What about Oleg?

				CUTLER
		Disappeared.  They're looking
		everywhere.  Maybe he went back to
		Czechoslovakia.

				EMIL
		No, he is here.  Shit...

				CUTLER
		Don't worry about him.  Think about
		yourself.

				EMIL
		What about my movie rights?  Book
		rights?

				CUTLER
		Look, I haven't really focused on that
		kind of thing.

				EMIL
		What's your cut?  How much?

				CUTLER
		I would say...half.  Half is fair.

				EMIL
			(laughs)
		No.  No way.

				CUTLER
		But it's...

				EMIL
		Thirty-percent.  No more.  Or I call
		another lawyer.  This is the biggest
		case of your life.  Don't try to
		negotiate.  Thirty percent.  Say yes or
		no.

				CUTLER
		This is not about money, Emil.  I need
		your trust in me.

				EMIL
		What else do you need?

				CUTLER
		I need to know about your background.  I
		need to know about your upbringing.  Why
		you're here.

				EMIL
			(indicating cigarette)
		Give me another one, please.

	Cutler stuffs another cigarette in Emil's mouth.  Lights it.

				CUTLER
		Tell me about yourself.  What you did as
		a young boy... what your parents were
		like.

				EMIL
		My father always degraded me.  Killed my
		self-esteem.  And my mother was blind.

				CUTLER
		Your mother was blind?

				EMIL
		Yeah, she went blind giving birth to me. 
		She went to fucking black market doctor
		to induce me.

				CUTLER
		Back in the Czech Republic?

				EMIL
		Yeah, yeah...bad doctor gave her bad
		drugs which made her go blind.  And my
		father blamed me for her blindness...

				CUTLER
		Your father blamed you for your mother's
		blindness?

				EMIL
		Yeah, he hated me from day when I was
		born.  Put it out.  Can you put the
		cigarette out?

	Cutler takes the cigarette from Emil's lips and extinguishes
	it.

				EMIL (CONT'D)
		That's what he did to me.  He put
		cigarettes out on me.

				CUTLER
		Your father put cigarettes out on you?

				EMIL
		Out on my back when I was a small boy.

				CUTLER
		Can I see your back?

	Emil rises.  Cutler comes around and pulls his shirt up.  HIS
	ENTIRE BACK IS COVERED WITH DISGUSTING PURPLISH WELTS FROM
	CIGARETTE BURNS.  Cutler recoils - horrified.

				CUTLER (CONT'D)
		Oh, Jesus.

				EMIL
		I'm abused.  Don't you think?

				CUTLER
		I don't think it's abuse, I think it's
		torture.

	INT. FIRE STATION 91 - DUFFY'S OFFICE - DAY

	Inside the Arson Squad, Duffy sits behind his desk.  Jordy
	stands across the table from his Chief.  Behind Jordy we can
	see Garcia and Korfin outside, listening.  Duffy has a
	subpoena in his hand.

				DUFFY
		The public doesn't have any idea what we
		do and now you're going to define our
		image!  This is going to be our Rodney
		King!

				JORDY
		What was I supposed to do?  The guy
		tried to mug me.  I was gonna send a cop
		back - I just forgot.

				DUFFY
		Forgot?  You handcuffed a civilian to a
		tree?!

				JORDY
		Chief - I know I screwed up - but this
		guy was no innocent civilian.

				DUFFY
		Well this is gonna end your career and
		probably mine.

				JORDY
		End my career?

				DUFFY
		How are you going to fight this?  Maybe
		if Oleg hadn't gotten away and you'd
		been on the front page, as a hero, this
		thing would be easier to fight.  You'd
		have the good to weight against the bad! 
		It's unfortunate that I have to make
		decisions based upon your press coverage
		but there's nothing I can do!  Gimme
		your shield.

				JORDY
		But Chief?  Over this??

				DUFFY
		There's nothing to talk about.  Get a
		good lawyer.  You're suspended until
		your trial.

	Jordy sighs.  Dying inside.  He surrenders his shield.  Drops
	his handcuffs, his pager and his gun.  Duffy picks up the gun
	- looks at it.

				DUFFY (CONT'D)
			(pats Jordy's shoulder)
		I know you got backup at home.  Drop it
		off.

	Jordy sighs and exits.

	INT. IMMIGRATION & NATURALIZATION OFFICE - DAY

	Jordy is talking to BILL STERN, a senior special agent.  In
	another office we see Daphne with two 25-year old ASSISTANT
	U.S. ATTORNEYS.

				STERN
			(to Jordy)
		Look, what don't you understand?  We've
		got a good relationship with the Czech's
		and the State Department doesn't want to
		cause an incident.

				JORDY
		But the D.A. needs her as an eyewitness!

				STERN
		They've got her testimony on videotape. 
		And even if they do take her to court
		immediately after she'll be extradited. 
		The Czechs want her back.  She shot a
		cop!  I mean, Christ, man, what if Emil
		Slovak and Oleg Razgul fled to the Czech
		Republic?  How would you feel if the
		Czechs wouldn't give them back to us?!

	Stern looks over at Daphne sitting in another office.  Lowers
	his voice.

				STERN (CONT'D)
		And just between us...I was married to a
		redhead.  They're a jinx.  Redheads are
		like cross-eyed priests.  Stay away from
		both.

	Jordy gives him a look.

				STERN (CONT'D)
		You want to see her - go ahead.

	Jordy enters the other office.  Sits next to Daphne.  The
	assistant U.S. Attorneys leave.

				JORDY
		We're gonna fight the extradition.

	Daphne takes Jordy's bandaged hand in hers.

				DAPHNE
		Forget about me.  You have enough
		problems of your own.

				JORDY
		...Do you really want me to forget about
		you?

				DAPHNE
		I don't want to drag you down with me.

				JORDY
		Daphne, I...

	Daphne touches her finger to his lips.

				DAPHNE
		Shhhh.

	She leans in and kisses him.  Then looks into his eyes,
	trying to find a smile.

	EXT. FEDERAL COURT HOUSE STEPS - DAY

	It's weeks later.  Nicolette is looking worn, tired,
	frazzled.  She's trying to go through her stand up.  But
	she's unraveling.  Not recovered from the loss of Eddie.

				NICOLETTE 
		...and today with his partner who he
		blamed for the crimes still at large,
		Emil Slovak will appear in court.  His
		lawyer will argue that he is mentally 
		unfit to stand trial.  Eyewitness News
		has also learned that later this month,
		Jordy Warsaw will himself be appearing
		in court.  He will be arraigned on
		charges of violating the civil rights
		of...Zwangen...Zwagen...

				MIKE
		Zwangendaba.

				NICOLETTE
		Goddamn assholes everywhere. 
		Zwangenbobby..Zwangendaba.  I got it. 
		I'll do it.  Shit.  Let's start again. 
		5-4-3-2-1...

	She starts over.

	INT. JORDY'S APARTMENT - NIGHT

	Jordy's on the couch.  A drink in his hand, watching TV with
	his dog, ZACK.  Jordy's eyes are glazed.  He's drunk, his
	eyes are as bloodshot as Eddie's were...without his job or
	Daphne. 
	His mind miles away - the dog and drink are his only comfort. 
	As Nicolette reports (she got the name right), her anger
	seeps through her broadcast.

				NICOLETTE (ON T.V.)
		Mr. Zwangendaba claims to be a direct
		descendent of the African King from whom
		he takes his name...

	Jordy's face is flashed on screen.  The phone RINGS.  Jordy
	picks up.

				JORDY
		Hello?
			(listens)
		No comment.

	He hangs up.  The phone RINGS AGAIN.

				JORDY (CONT'D)
		Hello?
			(listens)
		No!

	Jordy hangs up.  Changes the channel.  He stops as Robert
	Hawkins' face fills the screen.  He is standing across from
	someone - in a park - interviewing him.

				HAWKINS (ON T.V.)
		He robbed you?

	The ANGLE CUTS to Zwangendaba, the mugger, now dressed in a
	suit and tie.  Clean shaven and with a fresh haircut.  He
	stands in the same spot where Jordy handcuffed him to the
	tree.  He's appearing on "Top Story".

				ZWANGENDABA (ON T.V.)
		That's right, I encountered him right
		here.  I was just askin' for change an'
		he whips out his big gun an' pushes me
		up against that tree, whereupon he takes
		my money and handcuffs me to it, leavin'
		me there all exposed...

	The phone RINGS again.  Jordy suddenly pulls the phone off
	the table and throws it through the window:

	BACK TO TV

	as the channel is changed.  A REPORTER is on TV.  Behind him
	is a picture of Emil.  Emil is smiling, in a shirt and tie. 
	The reporter stands in front of the jail.

				REPORTER
		...and WBAI has learned that Mr. Slovak
		won't have to worry about how he is
		going to pay for his defense.  He has
		received movie offers and been in
		conversations with numerous publishers
		concerning the rights to his life story.

	REVERSE ANGLE

	Oleg is at a bar watching TV.  Poisoned with envy.


	INT. JORDY'S BEDROOM - NEXT MORNING

	Jordy stands in front of the mirror over the dresser.  We see
	the TV overturned in the b.g.  His back up gun is on it.  He
	stares at it.  Dark thoughts dancing in his head.

	EXT. BATTERY PARK - DAY

	Jordy sits in a taxi, wearing sunglasses.  Looking inside the
	park where a POLICE BARRICADE surrounds a POLICE TUGBOAT. 
	Cutler and Emil are arriving - Emil is being transferred to
	Rykers Island.  Jordy pulls his .38 out of his ankle holster
	and sticks it in his pocket.

	CLOSE ON METER

	to $42.00.  The TAXI DRIVER looks in the rearview mirror.

				TAXI DRIVER
		I can't believe this guy got off. 
		Unbelievable.

	Jordy takes out money.  All he's got is fifty bucks and he
	crams it into the slot.

				JORDY
		Whatever's leftover, keep.

	Jordy exits the cab.  The anger rising inside his body is
	coming to a boiling point.  He walks into the park.  Leon is
	sitting on a bench.  Just sitting there.  Also filled with
	rage and frustration.  Jordy meets his eyes.  Leon gets up
	and walks away.  Disgusted by it all.  Jordy's right hand
	grips the gun inside his pocket as he walks on.

	HIGH WIDE SHOT

	Many policemen are trying to control a swarm of reporters. 
	All are waiting for Emil.  WE SEE:

	HAWKINS

	and his camera crew, and, not far from him - frustrated and
	frazzled, waits Nicolette.  Still grieving her loss, she
	looks over at Hawkins and his crew.  She shoots him a
	disgusted look - Hawkins shrugs it off.  He checks his watch -
	anxious - looks at his cameraman.

				HAWKINS
		He said he'd be here.  Pick him up as he
		comes through the crowd.  Do you hear
		me?  For Chrissakes don't miss this.

	THE POLICE VAN PULLS UP

	Cutler's car behind it.  Emil - handcuffed - is unloaded from
	the van.  Reporters swarm forward - Cutler gets out of his
	car, hurrying up, taking his place alongside Emil and the
	POLICE ESCORTS.  The swarm follows - firing questions at
	Cutler.  He answers the barrage of questions with:

				CUTLER
		...my client was suffering from a major
		illness of schizophrenic nature wherein
		during times of intense stress, as a
		result of paranoid and psychotic
		delusions - there was impairment of his
		ability to appreciate wrongfullness...
		This is a victory for the mentally ill!

	Jordy walks alongside the moving mass.  His eyes focused on
	Emil - his hand in his pocket.  We notice in the crowd Max,
	the celebrity-crazed pyromaniac.  What's he doing here? 
	Max's hand is also stuck deeply in his pocket.  A weird gleam
	in his eye.  We see Korfin in the group, speaking to other
	cops.  Nicolette and her camera crew are vying for their
	place in the mass.  She watches Emil with quiet rage.  Cutler
	continues:

				CUTLER (CONT'D)
		...before Emil boards the police boat
		and heads for Rykers Island where he
		will be checked into the psyche ward, I
		want to say one last word to you all...
		As you know, Emil was coerced by Oleg
		Razgul into committing these murders,
		yet Oleg is still out in the street, a
		free man, filming gruesome murders... My
		client and I hope he is brought to
		justice in the near future.

	They are through the monuments, approaching the steps when
	Jordy passes a distracted Hawkins - who's checking his watch
	obsessively.

				HAWKINS
		Where the hell is he?  Goddamn it?!

	Jordy glares at Emil.  Emil looks back at Jordy, gloating. 
	Smiles.  He won.  He beat the system.  Jordy suddenly erupts.

				JORDY
		You think this is funny??  What the hell
		are you laughing at?

	Emil stares down Jordy.  Jordy grips the gun inside the
	jacket.

				CUTLER
			(to a nearby escort)
		Officer, keep this man back, he's
		assaulted my client on previous
		occasions.

	A PATROLMAN blocks Jordy from Emil.

				JORDY
		This is it?  This bastard kills the best
		cop this city ever had and we do
		nothing?

				CUTLER
		You may not like it marshal, but that's
		the law.

				JORDY
		And what about the other victims??  What
		about their families?  He'll end up in
		some country club nuthouse while his
		lawyer sells his rights to the movies
		and we just stand here and do nothing? 
		We let this scumbag walk?

	Jordy moves past the officer.  Emil breaks away from Cutler. 
	Gets in Jordy's face.  Laughs quietly.

				EMIL
		Be careful.  I can kill you.  I'm
		insane.

	Jordy shoves Emil into Cutler.  A scuffle breaks out as the
	cops separate the two - pulling Jordy back as we cut to:

	A VIDEO POV

	as it approaches Hawkins from behind.  A hand dips into frame
	tapping Hawkins on the shoulder.  Hawkins turns - sees who
	he's been waiting for.  His face lights up.

				HAWKINS
		I thought you wouldn't show up.  Where
		is it?  Where is the tape?

	IT'S OLEG

	In disguise - sunglasses and a hat.  Holding his videocamera.

				OLEG
		It's all in here.  All in here.

	MEANWHILE JORDY

	has been separated from Cutler and Emil as Hawkins' voice
	cuts above the din of the crowd, announcing excitedly:

				HAWKINS
		Wait a minute, Bruce!  We've got some
		interesting evidence, something you
		should look at!

	Reporters turn as Hawkins speaks.  His crew is taping as he
	continues introducing his broadcast:

				HAWKINS (CONT'D)
		I have exclusive rights to the ORIGINAL
		UNCUT videotape shot by Oleg Razgul,
		proving Emil Slovak was not insane! 
		Hard to believe...watch!

	Reporters swing their cameras over as Oleg holds his
	videocamera up in the air.

				OLEG (ON VIDEO)
		He knew exactly what he was doing - all
		of this was planned!  It's all here in
		my movie.  Emil is not insane.  Look. 
		Look!

	Oleg PLAYS his videocamera as lenses focus, we see excerpts
	of the moment where Emil explains to Eddie:

				EMIL (ON VIDEO)
		...so we kill someone famous and if we
		are caught, we are sent to mental
		hospital...

				CUTLER
			(points to Oleg)
		Officers, there's your killer, do your
		duty, arrest him!

	The police are attempting to get to Oleg, but a sea of
	reporters separate them.  We hear the staccato calls from the
	press corps.  Nicolette looks on in amazed outrage.  Jordy
	notices and starts moving towards her.  Before the POLICE
	CAPTAIN in charge of the detail can react, the rage which
	killed Milos, Tamina and Honey wells up inside Emil.  He
	yells at Oleg!

				EMIL
		Traitor!!

				OLEG
		No.  You are the traitor.  You are
		murderer.  I am director.  Action!

	Oleg pulls his gun.  Emil pulls Cutler in front of him as:

	BANG!

	Oleg FIRES!  Cutler is SHOT and goes down.  Hawkins swings
	his camera over to Oleg - filming the would-be assassin. 
	Oleg FIRES off another SHOT - hitting the COURT OFFICER
	escorting Emil.  Emil grabs the down officer's gun.  He
	swivels - rapid fires at Oleg.  Oleg topples.  People are
	screaming.  It's CHAOS.

	Emil darts forward - grabbing Nicolette who is closes to him. 
	He puts his handcuffed arms over her head - points the gun at
	her head.

				CAPTAIN
		Drop the gun!  DON'T SHOOT!

				EMIL
		I'll kill her!  Back off!  Everyone back
		away from me!

	We hear Jordy's voice above Emil.

				JORDY
		Let her go.  Let her fucking go!!

	The captain is screaming at all his men.

				CAPTAIN
		No one shoot!  Lower your weapons!  Do
		not fire!  No officer will fire his
		weapon unless I say so!
			(to Emil)
		Let the woman go!

	Cops reluctantly lower their weapons.  But Jordy is still
	aiming his gun at Emil.  He is the only one who hasn't
	lowered his gun.  The captain is yelling at him.

				CAPTAIN (CONT'D)
		Holster your weapons!  Back away.  That
		is an order!  No officers will fire!

	Emil is screaming back at the captain as Jordy screams at
	Emil.

				EMIL
		Tell him to put his gun down!

				JORDY
		Let her go!  Let her go!!

				EMIL
		If he doesn't lower his gun I'll fucking
		kill her.

	Jordy doesn't lower his gun.  Emil tries to back away.  The
	reporters - who have ducked and covered - are still keeping
	their lenses pointed at the scene.  This is great film! 
	Jordy follows after Emil - his gun raised.

				JORDY
		Let her go.

				NICOLETTE
		Shoot!  Shoot him!!

				EMIL
		Shut up!

	Meanwhile, the captain is still yelling:

				CAPTAIN
		No on shoot!  No one shoot!!  No officer
		will follow.  No officer will shoot!

	Nicolette is still encouraging Jordy.

				NICOLETTE
		Shoot!  Shoot!  Shoot him!!

				EMIL
		Shut up!

	Everyone is screaming at once.  It's mass chaos.  The captain
	is trying to keep everyone calm.  Cops following along with
	their weapons lowered.  All except Jordy - his gun still
	pointed at Emil. 
	Hawkins can't believe what footage he's getting.  He's
	pushing his cameraman to the front of the pack.  Trying to
	get the best coverage.

				EMIL (CONT'D)
		I'll surrender!! I'll surrender if he
		lowers his gun.

	He's pointing at Jordy but he's continuing to back away
	towards the police boat.

				NICOLETTE
		Don't.  Don't let him surrender.  Shoot
		him!

	Jordy won't take his gun off him.

				JORDY
		Let her go.  Let her go.

	The captain is yelling at Jordy.

				CAPTAIN
		Lower your weapon.  I told you - lower
		your weapon!

	Jordy struggles to get a clean shot at Emil.  He can't.  His
	heart pounding.  Adrenaline pumping.  He suddenly lowers his
	weapon.  Turns away.  The captain visibly relaxes.  Emil
	laughs.  Jordy suddenly turns back.  Quickly raises his
	weapon.

	JORDY SHOOTS

	Emil takes a shot in the leg.  Nicolette ducks under the
	handcuffs and scurries away.  Emil looks at Jordy - surprised
	he shot him.  Jordy FIRES AGAIN.  Emil is hit in the
	shoulder.  Jordy marches forward, EMPTYING HIS CLIP in Emil's
	chest.  Abdomen.  Head.  Gun fire echoes in the humid air as
	Emil stumbles back.  Does a funny dance and drops to the
	ground.  Dead.  The captain yells.

				CAPTAIN (CONT'D)
		I told you not to shoot!  No officers
		should shoot.

	Jordy quietly answers:

				JORDY
		I'm not a cop.  I'm a fire marshal.

				HAWKINS
		He's still alive.

	Hawkins looks down at Oleg.  He is sprawled on the ground. 
	His videocamera in hand - he's still making the movie.

	OLEG'S VIDEO POV

	as it ZOOMS from the Statue of Liberty and PANS to Oleg.  He
	looks in the lens with his dying eyes, gasps:

				OLEG
		A film...by Oleg Razgul.

	And Oleg dies but suddenly his eyes pop WIDE OPEN.  Hawkins
	jumps back, Oleg smiles, coughing in pain.

				OLEG (CONT'D)
		How was that?

	Oleg's head rolls to one side.  Now dead.  Nicolette runs
	over to Jordy.  Composing herself.  Coming together.  Glad
	Emil is dead.  Jordy starts to walk away.

				NICOLETTE
		Wait a minute.  Where are you going? 
		Learn from Eddie.  Talk to the court of
		public opinion.  Take the credit, you
		need it.

	She turns him around.  Straightens his tie.  Starts to push
	the hair out of his face but he stops her hand.

				JORDY
		No thanks.

	Jordy puts something in her hand.  She looks down.  It's
	EDDIE'S BADGE.  The one Jordy took out of Daphne's bathroom. 
	She looks up at him.  Her cameraman rolling.  The lens
	pointed at Jordy.  Jordy looks at Nicolette.  Meets her eyes. 
	He doesn't want to make a statement.  He still doesn't want
	the fame.  He did learn from Eddie.  Eddie was killed because
	he was a celebrity.  Jordy wants no part of it.

				NICOLETTE
		Cut.

	Her cameraman lowers his leans.  Jordy smiles.  She nods. 
	Jordy turns and walks away.

				NICOLETTE (CONT'D)
		Get a shot of him leaving.  Then pan to
		me.

	Jordy disappears into the sea of people.  The camera PANS
	back to Nicolette.

				NICOLETTE (CONT'D)
		Well, he wouldn't talk to us, but you
		saw it.

	The CAMERA PULLS BACK from Nicolette's face and the video is
	now on:

	THE JUMBOTRON IN TIMES SQUARE

	We PULL BACK FURTHER and FURTHER.  Nicolette finishing her
	stand up:

				NICOLETTE (CONT'D)
		New York City has a new hero, Fire
		Marshal Jordan Warsaw.  I hope that Fire
		Marshal Warsaw's heroic actions this
		afternoon will help with his other legal
		problems.  WB11 has also learned that
		the fire Marshal has retained an
		immigration lawyer to help Daphne
		Handlova with her case.  We wish her
		well.  This is Nicolette Karas, live at
		Battery Park, WB11 New York.  Good
		night.

	THE SCREEN

						 FADES TO BLACK.


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
