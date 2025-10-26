module.exports = function performanceProfiler(options = {}) {
  const slowThreshold = options.slowThreshold || 1000;

  return function (req, res, next) {
    const start = process.hrtime();

    res.on("finish", () => {
      const diff = process.hrtime(start);
      const time = diff[0] * 1000 + diff[1] / 1e6;

      console.log(`[Profiler] ${req.method} ${req.originalUrl} took ${time.toFixed(2)}ms`);

      if (time > slowThreshold) {
        console.warn(`[Profiler][SLOW] ${req.method} ${req.originalUrl} exceeded ${slowThreshold}ms`);
      }
    });

    next();
  };
};
