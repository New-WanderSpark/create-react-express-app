// Returns the PlaceData class which represents the data for a point of interest.

export default class PlaceData {
    // Excepts an object from the array returned by /places/search api endpoint OR the places/details api
    constructor ( googleSearchResult ) {
        // true if details have been loaded from /places/details
        this.detailsLoaded = false;

        // required properties
        this.placeId = googleSearchResult.place_id; // string
        this.title = googleSearchResult.name; // string
        this.geometry = googleSearchResult.geometry; // object { location, veiwport }

        // additional properties from google search api result
        this.address = googleSearchResult.formatted_address || ''; // String
        this.categories = googleSearchResult.types || []; // array of one or more Strings
        this.stars = googleSearchResult.rating || 'no rating'; // numeric string if available (ex. '4.8')
        this.photos = googleSearchResult.photos || []; // Array of photo objects per google places search api

        // set initial values for properties only available through the details api
        // this data is available when googleSearchResult comes from the details api.
        this.phoneNumber = googleSearchResult.international_phone_number || '';
        this.url = googleSearchResult.website || '';
    }

    // sets properties from a google place details api response object.
    setDetails ( googlePlaceDetails ) {
        this.phoneNumber = googlePlaceDetails.international_phone_number || 'unavailable';
        this.url = googlePlaceDetails.website || 'unavailable';
        this.detailsLoaded = true;
    }
}
