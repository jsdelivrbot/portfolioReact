import React, {Component} from 'react';
var $ = require('jquery')

export default class Nav extends Component{
  navToggle(){
    let nav = this.refs.smoothScroll;
    $(nav).toggle();
  }

  componentDidMount(){
    let nav = this.refs.smoothScroll;
    var $downArrow = $(".smoothScroll");
    var $topBar = $("#top-bar");
    var topBarHeight = $topBar.outerHeight();

      function smoothScroll(nav){
        $(nav).on("click",function(e){
          e.preventDefault();
          var $target = e.target;
          var scrollTo = $($target).attr('href');
          $('html,body').animate({
            scrollTop: $(scrollTo).offset().top,
          },1000);
        });
      }
      smoothScroll(nav);
      smoothScroll($downArrow);

      $(window).scroll(function(){
        var positionY = $(this).scrollTop();
        if(topBarHeight < positionY){
          $topBar.css({backgroundColor:"#14141b",padding:"10px 24px"});
        }else(
          $topBar.removeAttr("style")
        )
      });



  }
  render(){
    return(
      <div id="top-bar">
        <div className="row">
            <div  className="col-sm-12 col-md-12 col-wd-6">
              <h1 className="logo"> Wolfgang A Criollo</h1>
              <div className="nav-toggle">
              <i className="fa fa-bars fa-lg" ref="toggleNav" onClick={this.navToggle.bind(this)}></i>
              </div>
            </div>
            <div className="nav-wrap col-sm-12 col-md-12 col-wd-6">
              <nav id="nav" ref="smoothScroll">
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#developer">Resume</a></li>
                  {/* <li>Contact</li> */}
                </ul>
              </nav>
            </div>
        </div>
      </div>
    )
  }
}
