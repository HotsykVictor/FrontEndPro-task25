const func = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve("Ready");
    }, 2000)
  );

func().then(console.log);
