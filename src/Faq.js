import React from "react";

const Faq = () => {
  const showAnswerHandler = (e) => {
    const faqQuestionElement = e.target.parentElement.parentElement;
    const faqAnserElement = faqQuestionElement.nextElementSibling;
    const arrow = faqQuestionElement.children[1].children[0];
    console.log(faqQuestionElement, faqAnserElement,faqQuestionElement.children[1].children[0])
    faqAnserElement.classList.toggle('hide');
    arrow.classList.toggle('open');
    // if(!arrow){
    //   faqAnserElement.className = 'faq__answer hide';
    //   arrow.className = 'arrow__down';
    // }
  };
  return (
    <>
      <div className="faq__item">
        <h1>FAQ</h1>
        <div className="faq__question" onClick={showAnswerHandler}>
          <div className="question">
            {" "}
            <h4>How many team members can I invite? </h4>
          </div>
          <div className="icon__down">
            <img className='arrow__down' src="./images/icon-arrow-down.svg" alt="arrow" />
          </div>
        </div>
        <p className="faq__answer hide">
          You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan.{" "}
        </p>
        <div className="line">&nbsp;</div>
      </div>
      <div className="faq__item">
        <div className="faq__question" onClick={showAnswerHandler}>
          <div className="question">
            {" "}
            <h4>What is the maximum file upload size? </h4>
          </div>
          <div className="icon__down">
          <img className='arrow__down' src="./images/icon-arrow-down.svg" alt="arrow" />
          </div>
        </div>
        <p className="faq__answer hide">
          {" "}
          No more than 2GB. All files in your account must fit your allotted
          storage space.
        </p>
        <div className="line">&nbsp;</div>
      </div>
      <div className="faq__item">
        <div className="faq__question" onClick={showAnswerHandler}>
          <div className="question">
            {" "}
            <h4>How do I reset my password? </h4>
          </div>
          <div className="icon__down">
          <img className='arrow__down' src="./images/icon-arrow-down.svg" alt="arrow" />
          </div>
        </div>
        <p className="faq__answer hide">
          Click “Forgot password” from the login page or “Change password” from
          your profile page. A reset link will be emailed to you.
        </p>
        <div className="line">&nbsp;</div>
      </div>
      <div className="faq__item">
        <div className="faq__question" onClick={showAnswerHandler}>
          <div className="question">
            {" "}
            <h4>Can I cancel my subscription? </h4>
          </div>
          <div className="icon__down">
          <img className='arrow__down' src="./images/icon-arrow-down.svg" alt="arrow" />
          </div>
        </div>
        <p className="faq__answer hide">
          Yes! Send us a message and we’ll process your request no questions
          asked.
        </p>
        <div className="line">&nbsp;</div>
      </div>
      <div className="faq__item">
        <div className="faq__question" onClick={showAnswerHandler}>
          <div className="question">
            {" "}
            <h4>Do you provide additional support?</h4>
          </div>
          <div className="icon__down">
          <img className='arrow__down' src="./images/icon-arrow-down.svg" alt="arrow" />
          </div>
        </div>
        <p className="faq__answer hide">
          Chat and email support is available 24/7. Phone lines are open during
          normal business hours.
        </p>
        <div className="line">&nbsp;</div>
      </div>
    </>
  );
};

export default Faq;
