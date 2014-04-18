if (Badger.getAccessToken()) {
  BadgerCache.getAccountInfo(function(response) {
    Intercom('boot', {
        app_id:  Badger.environment == 'production' ? 'd43258112f18e7e7466d33f32407ae452541a9f9' : 'pxh2dwir',
        user_id: response.data.id,
        email: response.data.email,
        user_hash: response.data.intercom_hash,
        widget: {activator: '#IntercomDefaultWidget'},
        "first_name": response.data.first_name,
        "last_name": response.data.last_name,
        "domain_credits": response.data.domain_credits,
        "domain_count": response.data.domain_count,
        "confirmed_email": response.data.confirmed_email,
        "suspected_fraud": response.data.suspected_fraud
      }
    );
  });
}
