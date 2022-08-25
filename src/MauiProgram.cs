
/* Unmerged change from project 'GolfScorecard (net6.0-ios)'
Before:
using Microsoft.AspNetCore.Components.WebView.Maui;
using GolfScorecard.Data;
After:
using GolfScorecard.Data;
using Microsoft.AspNetCore.Components.WebView.Maui;
*/

/* Unmerged change from project 'GolfScorecard (net6.0-maccatalyst)'
Before:
using Microsoft.AspNetCore.Components.WebView.Maui;
using GolfScorecard.Data;
After:
using GolfScorecard.Data;
using Microsoft.AspNetCore.Components.WebView.Maui;
*/

/* Unmerged change from project 'GolfScorecard (net6.0-windows10.0.19041.0)'
Before:
using Microsoft.AspNetCore.Components.WebView.Maui;
using GolfScorecard.Data;
After:
using GolfScorecard.Data;
using Microsoft.AspNetCore.Components.WebView.Maui;
*/
using GolfScorecard.Data;

namespace GolfScorecard;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
            });

        builder.Services.AddMauiBlazorWebView();
#if DEBUG
        builder.Services.AddBlazorWebViewDeveloperTools();
#endif

        builder.Services.AddSingleton<WeatherForecastService>();

        return builder.Build();
    }
}
