---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.5 HTTP Strict Transport Security (HSTS)
parent_control: KONF.12.1 Eingabevalidierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.5 - HTTP Strict Transport Security (HSTS)
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Webbrowser | SOLLTE | aufgerufene Inhalte anhand der von der Webseite bereitgestellten  HTTP Strict Transport Security (HSTS) Richtlinie |  | einschränken | Konfigurationshistorie | >Konfiguration für Webbrowser SOLLTE aufgerufene Inhalte anhand der von der Webseite bereitgestellten  HTTP Strict Transport Security (HSTS) Richtlinie einschränken.

> [!info]- Guidance
>Die HTTP Strict Transport Security (HSTS) ist ein Web-Sicherheitsmechanismus – definiert in IETF RFC 6797 – der Webbrowser zwingt, eine ausschließlich verschlüsselte Verbindung (HTTPS) mit einem Webserver zu nutzen, selbst wenn der Nutzer oder eine Anwendung versucht, über das unsichere HTTP zuzugreifen. Konkret beinhaltet die HSTS-Richtlinie (oder Policy) einen speziellen HTTP-Antwort-Header, den der Webserver an den Browser sendet, der die Dauer (max-age) festlegt, für die der Browser die Verbindung nur über HTTPS herstellen soll. Die restriktive Konfiguration von Webbrowsern in Bezug auf diese Richtlinie kann die Schutzwirkung erhöhen, da so das Risiko eines Man-in-the-Middle (MITM)-Angriffs, bei dem ein Angreifer eine unverschlüsselte Verbindung abfangen oder den Nutzer auf eine unsichere Seite umleiten könnte, deutlich reduziert wird. Eine solche Konfiguration kann die Institution vor dem ungewollten Downgrade-Angriff (Downgrade Attack) schützen, bei dem die Verbindung von HTTPS auf das unsichere HTTP erzwungen wird.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 275e3b2d-5008-48ba-8d4f-72830bc8c730 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 275e3b2d-5008-48ba-8d4f-72830bc8c730 |
