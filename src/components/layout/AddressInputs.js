export default function AddressInputs({addressProps,setAddressProp}) {

    const {phone,streetAddress,postalCode,city,country} = addressProps;
  return (
    <>
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setAddressProp('phone',e.target.value)}
      />
      <input
        type="text"
        placeholder="Street Address"
        value={streetAddress}
        onChange={(e) => setAddressProp('streetAddress',e.target.value)}
      />
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setAddressProp('city',e.target.value)}
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setAddressProp('postalCode',e.target.value)}
        />
      </div>
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setAddressProp('country',e.target.value)}
      />
    </>
  );
}
