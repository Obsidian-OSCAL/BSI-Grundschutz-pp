---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.2 Content Security Policy (CSP)
parent_control: KONF.12.1 Eingabevalidierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.2 - Content Security Policy (CSP)
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Webbrowser | SOLLTE | aufgerufene Inhalte anhand der von der Webseite bereitgestellten Content Security Policy |  | einschränken | Konfigurationshistorie | >Konfiguration für Webbrowser SOLLTE aufgerufene Inhalte anhand der von der Webseite bereitgestellten Content Security Policy einschränken.

> [!info]- Guidance
>Eine Content Security Policy (CSP) ist ein Sicherheitsmechanismus, der es einer Webseite erlaubt, dem Webbrowser mitzuteilen, von welchen Quellen er aktive Inhalte wie Skripte oder auch passive Inhalte wie Bilder laden darf. Durch diesen als Whitelist funktionierenden Ansatz kann die Institution die Angriffsfläche ihrer Webanwendungen erheblich reduzieren. Ohne eine wirksame CSP könnten Angreifer durch Cross-Site-Scripting-Angriffe (XSS) bösartige Skripte in eine Webseite einschleusen, die dann im Browser des Nutzers ausgeführt werden und beispielsweise sensible Daten auslesen oder Aktionen im Namen des Opfers durchführen könnten. Die Aktivierung einer CSP blockiert die Ausführung von nicht vertrauenswürdigen Skripten und das Laden unerwünschter Ressourcen und schützt somit die Integrität und Vertraulichkeit der Web-Sitzung.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 65287ea4-9379-4088-adb0-774fb2b9ccbb |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 65287ea4-9379-4088-adb0-774fb2b9ccbb |
