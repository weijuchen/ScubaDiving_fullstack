// # the whole idea is like Blog component

import React, { useState } from "react";
import "./BlogComponent.css";
import TipsImage1 from "../Images/TipsImage1.jpg";

import TipsImage2 from "../Images/TipsImage2.jpg";

// import Image3 from './Article1Image3.jpg';
// import video1 from './video1.mp4';

const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const renderContent = () => {
    if (isReadMore) {
      return children;
    } else {
      return children.props.children.slice(0, 2); 
    }
  };

  return (
    <div className="read-more">
      <div className="image-section">
        <img src={TipsImage1} alt="Missing" />
      </div>
      <div className="text-section">
        {renderContent()}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...show less" : " read more"}
        </span>
      </div>
    </div>
  );
};

const HolidayTipsComponent = () => {
  return (
    <div className="container">
      <h1>How to Plan a Scuba Diving Trip</h1>
      <ReadMore>
        <div>
          <p>
            So you want to go on a scuba diving trip and don’t know where to
            start? Then you are in the right place. In this post, you will get
            some great tips and tricks on scuba diving trip planning, as well as
            dive travel in general. Some of the things we will talk about:
          </p>
          <li>How to plan a scuba diving trip</li>
          <li>Legal requirements</li>
          <li>Important documents you need on any scuba diving trip</li>
          <li>Where to book a scuba diving trip</li>
          <br />

          <h2>10 Steps to plan a scuba diving trip</h2>
          <p>
            There are 10 steps to planning a scuba diving vacation and if you
            pay close attention during each of them, you will have a great time
            on your next dive trip.
          </p>
          <h4>1. Set a budget</h4>
          <p>
            Setting a budget in advance is important to make planning your
            diving vacation easier and to find something appropriate.Scuba
            diving doesn’t have to be expensive, but there can be a significant
            cost involved, especially when traveling to super exotic or hard to
            get to places.
          </p>
          <h4>2. Type of diving vacation</h4>
          <p>
            The first step when planning a dive trip is to decide what kind of
            vacation you want to do. The common options are:
          </p>
          <p>
            <li>Pure diving trip</li>
            <li>Normal vacation with a few dives in between</li>
            <li>An even mix of sightseeing/relaxing and diving</li>
            <br />
            Depending on your choice, your packing requirements and travel
            itinerary will look different.If you travel with children, you are
            most likely going for option 2 or maybe 3, especially if your kids
            are too young to dive.I personally try to aim for number 3 and get
            in some diving, as well as sightseeing on most of my trips. In that
            case, my favorite way to travel is to explore a country or place for
            a week before embarking on a liveaboard diving trip for 7-10 days to
            end the trip.
          </p>
          <h4>3. Choose a diving destination</h4>
          <p>
            Picking a diving destination sounds easy but can be quite difficult
            with so many great options out there. If this is your first scuba
            diving trip, feel free to check out our destination webpage. Here is
            a recommendation system to help you find the best diving destination
            that suits you.
          </p>
          <p>
            If you are interested in combining diving with sightseeing, aim for
            larger destinations and inform yourself about what to do besides
            scuba diving. I sometimes check Lonely Planet, as well as
            Getyourguide if I am looking for things to do besides scuba diving.
          </p>
          <h4>4. Find the best time to travel</h4>
          <p>
            Not every time of the year is optimal for every diving destination.
            That’s why I always mention the best time to dive at a place when I
            review a diving destination. Of course, some of you have fixed
            holiday times when you can or cannot travel, however, if you are
            more flexible plan accordingly.
          </p>
          <h4>5. Pick the dive sites that interest you</h4>
          <p>
            Once you know where you’d like to go, it’s time to pick the dive
            sites that interest you most. After all, it isn’t always necessary
            to visit every single one of them, and you will most likely not have
            time to do so anyway. I find that a good mix of shore and boat
            dives, as well as reef, wreck, and open water dives works best to
            explore a place. However, leave at least one day open so you can
            either go back to a spot you really enjoyed.
          </p>

          <div className="image-in-text">
            <img src={TipsImage2} alt="Missing" />
          </div>
          <h4>6. Research requirements & prerequisites for the dives</h4>
          <p>
            This step is important but often dangerously neglected by beginner
            and advanced scuba divers alike. Ensure you are experienced enough
            with an appropriate level of certification before booking a diving
            package. From experience, an Advanced Open Water Diver certification
            will be all that’s needed at most dive sites, in addition to maybe a
            Nitrox Basic specialty.
          </p>
          <p>
            However, especially when wreck diving or at deep dive sites even
            more might be required. Most dive centers will have an FAQ page
            where they give you details on the requirements or contact them
            before booking. Next, get proper dive insurance if you don’t have
            one yet. Not only is it often required, especially in South-East
            Asia, it is also an affordable way to be safe while diving.
          </p>

          <h3>7. Check visa, local & customs regulations</h3>
          <p>
            Research vaccination and visa requirements for both your travel
            destination and your home country. Some countries may have strict
            visa regulations so ensure you know exactly how to obtain it and
            that it gets to you in time. PLEASE check your passport’s expiration
            date BEFORE you start your trip. Missing or expired passports are
            probably the number 1 reason why scuba diving trips end before they
            have even started. Bonus tip: It’s a good idea to tell your bank
            you’ll be abroad so they don’t deny your credit card payments when
            you are traveling..
          </p>
          <h3>8. Choose a good dive center or tour operator</h3>
          <p>
            Now that you have a good idea about the kind of diving you want to
            do, as well as where to go and when…you need to find someone to
            provide you with the means to do so. You can check out my article on
            how to find the best dive school out there for your training and
            diving needs if you need some tips. Compare prices, package options,
            as well as overall presentation style. Do they seem trustworthy? Did
            they put some effort into their website and product presentation?
            Reviews on Google, Bing, as well as big travel sites can help you
            decide, as well. Bonus tip: A good dive center will assist you in
            finding accommodation, as well as arranging a pick-up service to and
            from the airport or hotel. As such, they are vital in your scuba
            diving trip planning.
          </p>
          <h3>9. Use a scuba diving trip packing list</h3>
          <p>
            By now you should have all the information you need to decide how to
            pack for your scuba diving trip. I take this step before booking all
            my flights, as well as diving packages and accommodation, as my
            packing list may influence how I go about it. Use my scuba diving
            trip packing list to make sure you have everything you need. You
            should also think about whether to rent your scuba gear on site or
            bring it with you. In case you bring your own, ensure it is in good
            condition and ready to be used. Some airlines have more generous
            luggage policies than others, so sometimes booking a more expensive
            flight will allow you to bring your entire scuba gear, thereby
            saving you rental costs in the long run.
          </p>
          <h3>10. Book your scuba diving trip</h3>
          <p>
            The final step of your scuba diving vacation planning is to book all
            your flights, diving packages, accommodation, rental car, and
            anything else you will need. I wrote a complete guide on where to
            book your dive trip, but here are some quick suggestions. Booking a
            flight I usually start by using a flight comparison engine such as
            idealo, Kayak, Skyscanner, or Expedia to find cheap flights.
            However, I always check the airline’s website, too, before booking
            through a third-party provider, as this will give you better
            customer service most of the time. If you can find a competitive
            offer, a travel tour operator can also be a good option, as they are
            obliged to find you alternatives, in case a flight is canceled.
            Bonus tip: Flights are usually cheapest on Tuesdays and Wednesdays.
            Accommodation Accommodation naturally depends on the kind of diving
            trip you planning. For liveaboard diving, I recommend
            liveaboard.com. On the other hand, similar to airline tickets, I use
            comparison engines for finding hotels for a dive trip. My go-tos are
            Expedia and Hotels Combined for hotels and accommodation of any
            kind. Airbnb can be an option in larger cities, however, they are
            often not present at some of the more exotic diving destinations.
            Rental Cars I exclusively use Expedia and idealo for finding rental
            cars. Bonus tip: You can often get better rates when booking for 7
            or 14 days rather than shorter or longer durations.
          </p>
        </div>
      </ReadMore>
    </div>
  );
};

export default HolidayTipsComponent;
