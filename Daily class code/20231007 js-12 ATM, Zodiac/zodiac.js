// ♈ Aries (Ram): March 21–April 19
// ♉ Taurus (Bull): April 20–May 20
// ♊ Gemini (Twins): May 21–June 21
// ♋ Cancer (Crab): June 22–July 22
// ♌ Leo (Lion): July 23–August 22
// ♍ Virgo (Virgin): August 23–September 22
// ♎ Libra (Balance): September 23–October 23
// ♏ Scorpius (Scorpion): October 24–November 21
// ♐ Sagittarius (Archer): November 22–December 21
// ♑ Capricorn (Goat): December 22–January 19
// ♒ Aquarius (Water Bearer): January 20–February 18
// ♓ Pisces (Fish): February 19–March 20

function getYourZodiac(name) {
  console.log(`Welcome ${name} to Astrology. \n 
  Please enter your Date of birth
  `);
  const d = Number(prompt("Please enter date in digits from 1-31"));
  const m = Number(prompt("Please enter month in digits from 1-12"));

  // If user enters wrong dates
  if (d < 1 || d > 31) {
    return console.error("Please enter date from 1-31");
  }

  // If user enters wrong month
  if (m < 0 || m > 12) {
    return console.error("Please enter month from 1-12");
  }

  if ((d >= 21 && m == 3) || (d <= 19 && m == 4)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is --> ♈ Aries (Ram) <--`
    );
  } else if ((d >= 20 && m == 4) || (d <= 20 && m == 5)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is --> ♉ Taurus (Bull) <--`
    );
  } else if ((d >= 21 && m == 5) || (d <= 21 && m == 6)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is --> ♊ Gemini (Twins) <--`
    );
  } else if ((d >= 22 && m == 6) || (d <= 22 && m == 7)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is -->♋ Cancer (Crab) <--`
    );
  } else if ((d >= 23 && m == 7) || (d <= 22 && m == 8)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is -->♌ Leo (Lion) <--`
    );
  } else if ((d >= 23 && m == 8) || (d <= 22 && m == 9)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is -->♍ Virgo (Virgin) <--`
    );
  } else if ((d >= 23 && m == 7) || (d <= 23 && m == 10)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is -->♎ Libra (Balance) <--`
    );
  } else if ((d >= 24 && m == 10) || (d <= 21 && m == 11)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is -->♏ Scorpius (Scorpion)<--`
    );
  } else if ((d >= 22 && m == 11) || (d <= 21 && m == 12)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is -->♐ Sagittarius (Archer)<--`
    );
  } else if ((d >= 22 && m == 12) || (d <= 19 && m == 1)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is -->♑ Capricorn (Goat)<--`
    );
  } else if ((d >= 20 && m == 1) || (d <= 18 && m == 2)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is -->♒ Aquarius (Water Bearer)<--`
    );
  } else if ((d >= 19 && d < 29 && m == 2) || (d <= 20 && m == 3)) {
    console.log(
      `Your DOB is ${d}-${m} and your Zodiac is -->♓ Pisces (Fish)<--`
    );
  } else {
    console.log('You don"t have zodiac');
  }
}

getYourZodiac("Sapna");
