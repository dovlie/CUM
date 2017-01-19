
      var MyTitle = React.createClass({
        propTypes: {
          class: React.PropTypes.string.isRequired,
          title: React.PropTypes.string.isRequired,
        },

        render: function() {
           
          return <div className="single-features">
                <div className={this.props.class} data-wow-duration="500ms" data-wow-delay="300ms">
                        <img src="images/home/image3.png" class="img-responsive" alt=""/>
                    </div>
            
                <div className={this.props.title} data-wow-duration="500ms" data-wow-delay="300ms">
                     <h2 id="messName">Experienced and Enthusiastic</h2>
                     <h4 id="messContent">Ut officia cupidatat anim excepteur fugiat cillum ea occaecat rump pork chop tempor. Ut tenderloin veniam commodo. Shankle aliquip short ribs, chicken eiusmod exercitation shank landjaeger spare ribs corned beef.</h4>
                        
                    </div>
                </div>
        }
      });

      ReactDOM.render(
        <MyTitle  class="col-sm-5 wow fadeInLeft" title="col-sm-6 wow fadeInRight"/>,
        document.getElementById('row')
      );