const countryTimeZones = [
    { country: "Universal Time", city: "UTC", zone: "UTC" },
    { country: "Afghanistan", city: "Kabul", zone: "Asia/Kabul" },
    { country: "Argentina", city: "Buenos Aires", zone: "America/Argentina/Buenos_Aires" },
    { country: "Australia", city: "Adelaide", zone: "Australia/Adelaide" },
    { country: "Australia", city: "Brisbane", zone: "Australia/Brisbane" },
    { country: "Australia", city: "Perth", zone: "Australia/Perth" },
    { country: "Australia", city: "Sydney", zone: "Australia/Sydney" },
    { country: "Austria", city: "Vienna", zone: "Europe/Vienna" },
    { country: "Bangladesh", city: "Dhaka", zone: "Asia/Dhaka" },
    { country: "Belgium", city: "Brussels", zone: "Europe/Brussels" },
    { country: "Brazil", city: "São Paulo", zone: "America/Sao_Paulo" },
    { country: "Canada", city: "Edmonton", zone: "America/Edmonton" },
    { country: "Canada", city: "Halifax", zone: "America/Halifax" },
    { country: "Canada", city: "St. John's", zone: "America/St_Johns" },
    { country: "Canada", city: "Toronto", zone: "America/Toronto" },
    { country: "Canada", city: "Vancouver", zone: "America/Vancouver" },
    { country: "Canada", city: "Winnipeg", zone: "America/Winnipeg" },
    { country: "Chile", city: "Santiago", zone: "America/Santiago" },
    { country: "China", city: "Beijing", zone: "Asia/Shanghai" },
    { country: "Colombia", city: "Bogotá", zone: "America/Bogota" },
    { country: "Costa Rica", city: "San José", zone: "America/Costa_Rica" },
    { country: "Czechia", city: "Prague", zone: "Europe/Prague" },
    { country: "Denmark", city: "Copenhagen", zone: "Europe/Copenhagen" },
    { country: "Egypt", city: "Cairo", zone: "Africa/Cairo" },
    { country: "Ethiopia", city: "Addis Ababa", zone: "Africa/Addis_Ababa" },
    { country: "Finland", city: "Helsinki", zone: "Europe/Helsinki" },
    { country: "France", city: "Paris", zone: "Europe/Paris" },
    { country: "Germany", city: "Berlin", zone: "Europe/Berlin" },
    { country: "Ghana", city: "Accra", zone: "Africa/Accra" },
    { country: "Greece", city: "Athens", zone: "Europe/Athens" },
    { country: "Hong Kong", city: "Hong Kong", zone: "Asia/Hong_Kong" },
    { country: "Iceland", city: "Reykjavík", zone: "Atlantic/Reykjavik" },
    { country: "India", city: "New Delhi", zone: "Asia/Kolkata" },
    { country: "Indonesia", city: "Jakarta", zone: "Asia/Jakarta" },
    { country: "Ireland", city: "Dublin", zone: "Europe/Dublin" },
    { country: "Israel", city: "Jerusalem", zone: "Asia/Jerusalem" },
    { country: "Italy", city: "Rome", zone: "Europe/Rome" },
    { country: "Jamaica", city: "Kingston", zone: "America/Jamaica" },
    { country: "Japan", city: "Tokyo", zone: "Asia/Tokyo" },
    { country: "Kenya", city: "Nairobi", zone: "Africa/Nairobi" },
    { country: "Malaysia", city: "Kuala Lumpur", zone: "Asia/Kuala_Lumpur" },
    { country: "Mexico", city: "Mexico City", zone: "America/Mexico_City" },
    { country: "Morocco", city: "Casablanca", zone: "Africa/Casablanca" },
    { country: "Nepal", city: "Kathmandu", zone: "Asia/Kathmandu" },
    { country: "Netherlands", city: "Amsterdam", zone: "Europe/Amsterdam" },
    { country: "New Zealand", city: "Auckland", zone: "Pacific/Auckland" },
    { country: "Nigeria", city: "Lagos", zone: "Africa/Lagos" },
    { country: "Norway", city: "Oslo", zone: "Europe/Oslo" },
    { country: "Pakistan", city: "Karachi", zone: "Asia/Karachi" },
    { country: "Peru", city: "Lima", zone: "America/Lima" },
    { country: "Philippines", city: "Manila", zone: "Asia/Manila" },
    { country: "Poland", city: "Warsaw", zone: "Europe/Warsaw" },
    { country: "Portugal", city: "Lisbon", zone: "Europe/Lisbon" },
    { country: "Qatar", city: "Doha", zone: "Asia/Qatar" },
    { country: "Romania", city: "Bucharest", zone: "Europe/Bucharest" },
    { country: "Russia", city: "Moscow", zone: "Europe/Moscow" },
    { country: "Saudi Arabia", city: "Riyadh", zone: "Asia/Riyadh" },
    { country: "Singapore", city: "Singapore", zone: "Asia/Singapore" },
    { country: "South Africa", city: "Johannesburg", zone: "Africa/Johannesburg" },
    { country: "South Korea", city: "Seoul", zone: "Asia/Seoul" },
    { country: "Spain", city: "Madrid", zone: "Europe/Madrid" },
    { country: "Sri Lanka", city: "Colombo", zone: "Asia/Colombo" },
    { country: "Sweden", city: "Stockholm", zone: "Europe/Stockholm" },
    { country: "Switzerland", city: "Zurich", zone: "Europe/Zurich" },
    { country: "Taiwan", city: "Taipei", zone: "Asia/Taipei" },
    { country: "Thailand", city: "Bangkok", zone: "Asia/Bangkok" },
    { country: "Türkiye", city: "Istanbul", zone: "Europe/Istanbul" },
    { country: "Ukraine", city: "Kyiv", zone: "Europe/Kyiv" },
    { country: "United Arab Emirates", city: "Dubai", zone: "Asia/Dubai" },
    { country: "United Kingdom", city: "London", zone: "Europe/London" },
    { country: "United States", city: "Chicago", zone: "America/Chicago" },
    { country: "United States", city: "Denver", zone: "America/Denver" },
    { country: "United States", city: "Honolulu", zone: "Pacific/Honolulu" },
    { country: "United States", city: "Los Angeles", zone: "America/Los_Angeles" },
    { country: "United States", city: "New York", zone: "America/New_York" },
    { country: "United States", city: "Phoenix", zone: "America/Phoenix" },
    { country: "United States", city: "Anchorage", zone: "America/Anchorage" },
    { country: "Vietnam", city: "Ho Chi Minh City", zone: "Asia/Ho_Chi_Minh" }
];

const timezoneSelect = document.getElementById("timezone-select");
const clockMode = document.getElementById("clock-mode");
const locationName = document.getElementById("location-name");
const locationZone = document.getElementById("location-zone");
const currentDate = document.getElementById("current-date");
const gmtOffset = document.getElementById("gmt-offset");
const digitalTime = document.getElementById("digital-time");
const digitalPeriod = document.getElementById("digital-period");
const summaryTime = document.getElementById("summary-time");
const dayStatus = document.getElementById("day-status");
const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
const offsetFormatters = new Map();
const countryZones = countryTimeZones.map((location) => ({
    ...location,
    isCountry: true
}));
const knownZones = new Set(countryZones.map((location) => location.zone));

if (!knownZones.has(localTimeZone)) {
    countryZones.push({
        country: "Your local time",
        city: localTimeZone.replaceAll("_", " "),
        zone: localTimeZone,
        isCountry: true
    });
    knownZones.add(localTimeZone);
}

let activeTimeFormatter;
let activeDateFormatter;
let lastDateRefreshMinute = -1;

const moreZones = typeof Intl.supportedValuesOf === "function"
    ? Intl.supportedValuesOf("timeZone")
        .filter((zone) => !knownZones.has(zone))
        .map((zone) => ({
            country: zone.split("/")[0].replaceAll("_", " "),
            city: zone.split("/").slice(1).join(", ").replaceAll("_", " "),
            zone,
            isCountry: false
        }))
    : [];

function getGMTOffset(timeZone, date) {
    if (!offsetFormatters.has(timeZone)) {
        offsetFormatters.set(timeZone, new Intl.DateTimeFormat("en", {
            timeZone,
            timeZoneName: "shortOffset"
        }));
    }

    const parts = offsetFormatters.get(timeZone).formatToParts(date);
    const rawOffset = parts.find((part) => part.type === "timeZoneName")?.value || "GMT";
    const match = rawOffset.replace("UTC", "GMT").match(/^GMT(?:([+-])(\d{1,2})(?::?(\d{2}))?)?$/);

    if (!match) {
        return rawOffset.replace("UTC", "GMT");
    }

    const [, sign = "+", hours = "0", minutes = "00"] = match;
    return `GMT${sign}${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}

function createOption(location, date) {
    const option = document.createElement("option");
    option.value = location.zone;
    option.dataset.country = location.country;
    option.dataset.city = location.city;
    option.dataset.isCountry = String(location.isCountry);
    option.textContent = `${location.country} · ${location.city} (${getGMTOffset(location.zone, date)})`;
    return option;
}

function populateTimeZones() {
    const now = new Date();
    const countriesGroup = document.createElement("optgroup");
    countriesGroup.label = "Countries & popular cities";

    countryZones
        .sort((a, b) => a.country.localeCompare(b.country) || a.city.localeCompare(b.city))
        .forEach((location) => countriesGroup.append(createOption(location, now)));
    timezoneSelect.append(countriesGroup);

    if (moreZones.length > 0) {
        const moreGroup = document.createElement("optgroup");
        moreGroup.label = "More time zones";
        moreZones
            .sort((a, b) => a.zone.localeCompare(b.zone))
            .forEach((location) => moreGroup.append(createOption(location, now)));
        timezoneSelect.append(moreGroup);
    }

    timezoneSelect.value = localTimeZone;
    if (!timezoneSelect.value) {
        timezoneSelect.value = "UTC";
    }
}

function updateOptionOffsets(date) {
    timezoneSelect.querySelectorAll("option").forEach((option) => {
        const offset = getGMTOffset(option.value, date);
        option.textContent = `${option.dataset.country} · ${option.dataset.city} (${offset})`;
    });
}

function getSelectedTimeZone() {
    const option = timezoneSelect.selectedOptions[0];
    return {
        zone: timezoneSelect.value,
        country: option?.dataset.country || timezoneSelect.value,
        city: option?.dataset.city || timezoneSelect.value
    };
}

function updateLocation() {
    const location = getSelectedTimeZone();
    locationName.textContent = location.country;
    locationZone.textContent = `${location.city} · ${location.zone.replaceAll("_", " ")}`;
    activeTimeFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: location.zone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23"
    });
    activeDateFormatter = new Intl.DateTimeFormat("en", {
        timeZone: location.zone,
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    lastDateRefreshMinute = -1;
}

function updateClock() {
    const now = new Date();
    const location = getSelectedTimeZone();
    const parts = Object.fromEntries(
        activeTimeFormatter.formatToParts(now).map((part) => [part.type, part.value])
    );
    const hour = Number(parts.hour);
    const minute = Number(parts.minute);
    const second = Number(parts.second);
    const hour12 = hour % 12 || 12;
    const period = hour < 12 ? "AM" : "PM";

    hourHand.style.transform = `rotate(${30 * (hour % 12) + minute / 2}deg)`;
    minuteHand.style.transform = `rotate(${6 * minute + second / 10}deg)`;
    secondHand.style.transform = `rotate(${6 * second}deg)`;
    digitalTime.textContent = `${String(hour12).padStart(2, "0")}:${parts.minute}:${parts.second}`;
    digitalPeriod.textContent = period;
    summaryTime.textContent = `${String(hour12).padStart(2, "0")}:${parts.minute} ${period}`;
    if (now.getMinutes() !== lastDateRefreshMinute) {
        currentDate.textContent = activeDateFormatter.format(now);
        lastDateRefreshMinute = now.getMinutes();
    }
    gmtOffset.textContent = getGMTOffset(location.zone, now);
    dayStatus.textContent = hour >= 6 && hour < 18 ? "DAYTIME" : "NIGHTTIME";
    dayStatus.classList.toggle("is-day", hour >= 6 && hour < 18);

    if (now.getMinutes() !== lastOffsetRefreshMinute) {
        updateOptionOffsets(now);
        lastOffsetRefreshMinute = now.getMinutes();
    }
}

let lastOffsetRefreshMinute = -1;
populateTimeZones();
updateLocation();
updateClock();

timezoneSelect.addEventListener("change", () => {
    updateLocation();
    updateClock();
});

clockMode.addEventListener("change", () => {
    document.getElementById("analog-clock").classList.toggle("is-hidden", clockMode.checked);
    document.getElementById("digital-clock").classList.toggle("is-hidden", !clockMode.checked);
});

setInterval(updateClock, 1000);
