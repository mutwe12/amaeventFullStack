function About() {
    return (
        <div >
        <div className="container mt-5 text-white"  style={{width:'100%'}}>
        <div className="row">
          <div className="col-sm-4 mb-4" data-mdb-animation="slide-right" data-mdb-animation-start="onLoad">
            <h3>Wedding Engagement Plans</h3>
            <p>AMEA Event Management specializes in crafting unforgettable moments 
              for couples embarking on their journey together. 
              Our wedding engagement plans are meticulously designed to create an intimate, romantic, 
              and personalized experience. From selecting breathtaking venues
               to curating bespoke themes, we ensure that every detail reflects 
               the love story of the couple. Our team orchestrates the perfect ambiance,
                including exquisite décor, entertainment, and catering,
               to make this special occasion an unforgettable milestone.</p>
               <button type="button" class="btn btn-primary">More</button>
            
            
          </div>
          <div className="col-sm-4 mb-4" data-mdb-animation="slide-up" data-mdb-animation-start="onLoad">
            <h3>Birthday Plans</h3>
            <p>Celebrate life's milestones with AMEA's exceptional birthday 
              planning services. We specialize in creating joyous and memorable 
              experiences for individuals of all ages. From themed children's parties 
              to sophisticated adult celebrations, our team customizes every aspect,
               including décor, entertainment, and catering, to match the personality and preferences of the honoree. Let us bring your vision to life and turn your
               birthday celebration into an extraordinary affair.</p>
               <button type="button" class="btn btn-primary">More</button>
            
          </div>
          <div className="col-sm-4 mb-4" data-mdb-animation="slide-left" data-mdb-animation-start="onLoad">
            <h3>Graduation Party Planning</h3>        
            <p>Graduating is a momentous achievement, and AMEA Event Management takes pride in organizing memorable graduation parties that honor this milestone. Our team designs events that reflect the graduate's journey and accomplishments. Whether it's a sophisticated soirée or a lively gathering, we curate unique themes, décor elements, and entertainment options to ensure 
              a fitting celebration for this important transition in life.</p>
              <button type="button" class="btn btn-primary">More</button>
          
          </div>
        </div>
      </div>


        </div>
    );
}

export default  About;