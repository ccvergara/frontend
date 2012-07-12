with (Hasher('Rewards','Application')) {
  route('#rewards', function() {
    var referral_code_div = div(spinner('Loading...'));
    
    render(
      chained_header_with_links(
        { text: 'My Account' },
        { text: 'Rewards' }
      ),
      
      div({ 'class': 'fancy' },
        Account.account_nav_table(
          referral_code_div
        )
      )
    );
    
    /*
      Get the referral codes from account info.
      If the user has no referral codes, render the referral code create screen.
      Otherwise, render the rewards page, with referral code and completed actions table.
    */
    BadgerCache.getAccountInfo(function(response) {
      var referral_codes = response.data.referral_codes || [],
          url_base = Badger.api_host.replace(/api/,'www'); // for the sake of local and qa development
          
      if (referral_codes.length > 0) {
        var referral_code = referral_codes[0],
            rewards = response.data.rewards || [],
            referral_stats = response.data.referral_stats || {},
            rewards_div = div();
        
        render({ into: referral_code_div },
          info_message({ style: 'text-align: center; border: none; background: #F1F1F1' },
            h2({ style: 'margin: 0px' }, 'My Referral Code'),
            input({ 'class': 'fancy', style: 'font-size: 20px; text-align: center; width: 450px; color: #707070; cursor: pointer', readonly: true, value: (url_base + referral_code), onClick: function(e) { e.target.select() } })
          ),

          div({ id: 'referral-status', style: 'margin: 20px auto;' },
            table({ style: 'width: 100%' }, tbody(
              tr(
                td({ style: 'text-align: center' },
                  p({ 'class': 'rewards-points' }, (referral_stats.points_earned||0)+''),
                  span({ style: 'margin: auto;' }, 'Points Earned')
                ),
                td({ style: 'width: 80%' },
                  div({ 'class': 'meter small green nostripes', style: 'margin: 15px; height: 20px;' },
                    span({ style: 'height: 20px; width: ' + (referral_stats.points_earned||0)+'' + '%' })
                  )
                )
              )
            ))
          ),

          rewards_div
        );
        
        render({ into: rewards_div },
          table({ 'class': 'fancy-table' }, tbody(
            tr({ 'class': 'table-header' },
              th({ style: 'width: 8%; text-align: center' }, 'Points'),
              th({ style: 'width: 75%' }, 'Action'),
              th('Completed On')
            ),
            rewards.map(function(reward) {
              return tr(
                td({ style: 'text-align: center; font-weight: bold' }, reward.point_value),
                td(reward.description),
                td(date(reward.created_at).toString('MMMM dd yyyy'))
              );
            })
          ))
        );
      } else {
        var default_slug = response.data.name.replace(/\s+/,'').toLowerCase();
        
        render({ into: referral_code_div },
          form_with_loader({ 'class': 'fancy', action: create_referral_code },
            p('Earn points toward free domains by referring people to Badger! Here is how it works:'),
            ul(
              li("Create a referral code and invite people - their first ", b("registration"), " or ", b("transfer"), " is only ", b("$5.")),
              li("You receive ", b("10 points"), " for each domain registered or transferred by users you have referred."),
              li(b("100 points = 1 free domain."))
            ),
            p("Get started by creating your referral code:"),
            
            div({ id: 'referral-code-create-errors' }),
            
            div({ id: 'referral-code-create-div', style: '' },
              fieldset(
                label('Referral Link Preview:'),
                input({ id: 'link-preview', style: 'width: 350px; color: #AAA;', readonly: true, value: url_base + default_slug })
              ),
              fieldset({ 'for': 'slug' },
                label('My Referral Code:'),
                input({ style: 'width: 150px;', name: 'slug', value: default_slug, onKeyUp: function(e) { document.getElementById('link-preview').value = (url_base + e.target.value); } }),
                ul({ style: 'font-size: 12px; line-height: 20px; margin: 0px;' },
                  li('Length must be at least 6 characters'),
                  li('Code can only contain the characters: A-Z, 0-9, and _'),
                  li('Code must begin and end with the characters A-Z and 0-9')
                )
              ),
              fieldset({ 'class': 'no-label' },
                submit('Create Referral Code')
              )
            )
          )
        );
        
        $('input[name=slug]').focus();
      }
    });
  });
  
  define('create_referral_code', function(form_data) {
    Badger.createReferralCode(form_data, function(response) {
      
      // replace 'slug' with 'referral code' in a totally awesome manner
      response = JSON.parse(JSON.stringify(response).replace(/slug/g,'referral code'));
      
      if (response.meta.status == 'ok') {
        BadgerCache.flush('account_info');
        set_route('#rewards');
      } else {
        $('#referral-code-create-errors').html(
          error_message(response)
        );
        hide_form_submit_loader();
      }
    });
  });
}