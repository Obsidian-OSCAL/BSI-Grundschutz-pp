---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.2.1 Verifikation der Sendeberechtigung
parent_control: KONF.13.2 Authentizität von Nachrichten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.2.1 - Verifikation der Sendeberechtigung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

** Übergeordnetes Control: ** [KONF.13.2 Authentizität von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.13.2%20Authentizität%20von%20Nachrichten.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | E-Mail | SOLLTE | eine automatische Verifikation der Sendeberechtigung |  | aktivieren | Konfigurationshistorie | >Konfiguration für E-Mail SOLLTE eine automatische Verifikation der Sendeberechtigung aktivieren.

> [!info]- Guidance
>Mit dem Sender Policy Framework (SPF) kann geprüft werden, ob der Sender zum Versand von E-Mails für diese Mailadresse berechtigt war. E-Mails ohne SPF-Header sind unzureichend authentifiziert, so dass sie leicht für Spoofing oder Phishing missbraucht werden können. Allerdings werden noch immer E-Mails ohne SPF verschickt, so dass eine Blockierung zu funktionalen Einschränkungen führen könnte. Kompromissmaßnahmen können z.B. die Markierung der E-Mail mit einem Warnhinweis , Allowlisting, Greylisting, Quarantäne oder eine Filterung durch Anomalieerkennung sein.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c163be1f-8236-439c-a1d1-34fa7472c06a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | c163be1f-8236-439c-a1d1-34fa7472c06a |
