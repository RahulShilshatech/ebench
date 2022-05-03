import React from "react";
import {
  Grid,
  Container,
  Search,
  Select,
  Button,
  Input,
  Divider,
} from "semantic-ui-react";
import Cards from "./Cards";
import Navbar from "../Navbar";

export default () => {
  return (
    <Navbar>
      <Container>
        <div className="job-section">
          <div className="find-jobs">
            <Input placeholder="What" />
            <Input placeholder="Where" />
            <Button primary className="apply-btn">
              Find Jobs
            </Button>
            <div className="text-blue">Advance Job Search</div>
          </div>
          <div className="tags">
            <Select placeholder="Newest" />
            <Select placeholder="Newest" />
            <Select placeholder="Newest" />
            <Select placeholder="Newest" />
            <Select placeholder="Newest" />
            <Select placeholder="Newest" />
            <Select placeholder="Newest" />
          </div>
          <Divider />
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column width={10}>
                <div className="job-decription">
                  {/* <div className="filters">
                    <div className="bg-dark">Ux Designer</div>
                    <div className="bg-light">Ux Designer</div>

                    <div className="bg-dark">Ux Designer</div>
                    <div className="text-blue">Clear Filters</div>
                  </div> */}
                  <div className="sort-section">
                    <div className="sort">
                      <p>
                        Jobs for you <span className="text-blue">Popular</span>
                      </p>
                      <div>
                        {" "}
                        <Select placeholder="Newest" />
                      </div>
                    </div>
                  </div>
                  <div className="jobCard">
                    <Cards
                      job
                      image="/images/gogle.png"
                      heading="Google Info"
                    />
                    <Cards
                      job
                      image="https://www.bjumg.org/wp-content/uploads/2020/03/Facebook-Icon-Facebook-Logo-Social-Media-Fb-Logo-Facebook-Logo-PNG-and-Vector-with-Transparent-Background-for-Free-Download.png"
                      heading="Facebook"
                    />

                    <Cards
                      job
                      heading="Twitter"
                      image="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                    />
                    <Cards
                      job
                      heading="Apple Inc"
                      image="https://img.icons8.com/ios/452/mac-os.png"
                    />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={6}>
                <div className="job-qalification">
                  <div className="info">
                    <img src="/images/gogle.png" alt="immg" />

                    <p className="">
                      Enginner{" "}
                      <span className="block">
                        Engineer ANZ Banking Group1,121 reviews - India
                      </span>
                    </p>
                  </div>
                  <div className="button-apply">
                    <Button primary className="apply-btn">
                      Apply Now
                    </Button>
                  </div>
                  <div className="scroll-job">
                    <div className="qualification ">
                      <div className="">
                        <p> Requisition Title -Engineer</p>

                        <p>Job Number: - IND029575</p>
                      </div>
                      <h5>MInimum Qualification</h5>
                      <ul>
                        <li>- Bachelor degree in deign related</li>
                        <li>- 7 Years of experirence</li>

                        <li>- Bachelor degree in deign related</li>

                        <li>- Bachelor degree in deign related</li>

                        <li>- Bachelor degree in deign related</li>
                      </ul>
                      <h5>Preffered Qualification</h5>
                      <ul>
                        <li>- Bachelor degree in deign related</li>
                        <li>- 7 Years of experirence</li>

                        <li>- Bachelor degree in deign related</li>
                      </ul>
                    </div>
                    <div className="qualification ">
                      <h5>About</h5>
                      <ul>
                        <li>
                          - Bachelor or Masters in Engineering or similar and a
                          minimum of 10+ years of software development
                          experience.
                        </li>
                        <li>
                          - Strong Base24 Classic design and development
                          experience Must have excellent coding ability using
                          TAL, Cobol, TACL and passion to write code (Mandatory)
                        </li>

                        <li>
                          - Experience with Enscribe Database on NonStop HP
                          Tandem systems. (Mandatory). Experience on SQL/MP, or
                          other database is desirable.
                        </li>
                        <li>
                          - Bachelor or Masters in Engineering or similar and a
                          minimum of 10+ years of software development
                          experience.
                        </li>
                        <li>
                          - Strong Base24 Classic design and development
                          experience Must have excellent coding ability using
                          TAL, Cobol, TACL and passion to write code (Mandatory)
                        </li>

                        <li>
                          - Experience with Enscribe Database on NonStop HP
                          Tandem systems. (Mandatory). Experience on SQL/MP, or
                          other database is desirable.
                        </li>
                        <li>
                          - Bachelor or Masters in Engineering or similar and a
                          minimum of 10+ years of software development
                          experience.
                        </li>
                        <li>
                          - Strong Base24 Classic design and development
                          experience Must have excellent coding ability using
                          TAL, Cobol, TACL and passion to write code (Mandatory)
                        </li>

                        <li>
                          - Experience with Enscribe Database on NonStop HP
                          Tandem systems. (Mandatory). Experience on SQL/MP, or
                          other database is desirable.
                        </li>
                        <li>
                          - Bachelor or Masters in Engineering or similar and a
                          minimum of 10+ years of software development
                          experience.
                        </li>
                        <li>
                          - Strong Base24 Classic design and development
                          experience Must have excellent coding ability using
                          TAL, Cobol, TACL and passion to write code (Mandatory)
                        </li>

                        <li>
                          - Experience with Enscribe Database on NonStop HP
                          Tandem systems. (Mandatory). Experience on SQL/MP, or
                          other database is desirable.
                        </li>
                        <li>
                          - Bachelor or Masters in Engineering or similar and a
                          minimum of 10+ years of software development
                          experience.
                        </li>
                        <li>
                          - Strong Base24 Classic design and development
                          experience Must have excellent coding ability using
                          TAL, Cobol, TACL and passion to write code (Mandatory)
                        </li>

                        <li>
                          - Experience with Enscribe Database on NonStop HP
                          Tandem systems. (Mandatory). Experience on SQL/MP, or
                          other database is desirable.
                        </li>
                        <li>
                          - Bachelor or Masters in Engineering or similar and a
                          minimum of 10+ years of software development
                          experience.
                        </li>
                        <li>
                          - Strong Base24 Classic design and development
                          experience Must have excellent coding ability using
                          TAL, Cobol, TACL and passion to write code (Mandatory)
                        </li>

                        <li>
                          - Experience with Enscribe Database on NonStop HP
                          Tandem systems. (Mandatory). Experience on SQL/MP, or
                          other database is desirable.
                        </li>
                      </ul>
                    </div>
                    <div className="qualification ">
                      <h5>About the Job</h5>
                      <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    </Navbar>
  );
};
