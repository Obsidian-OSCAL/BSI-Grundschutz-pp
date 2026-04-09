---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.2.2 Verifikation der Serversignatur
parent_control: KONF.13.2 Authentizität von Nachrichten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.2.2 - Verifikation der Serversignatur
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

** Übergeordnetes Control: ** [KONF.13.2 Authentizität von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.13.2%20Authentizität%20von%20Nachrichten.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | E-Mail | SOLLTE | die Serversignatur eingehender E-Mails | automatisch | authentifizieren | Konfigurationshistorie | >Konfiguration für E-Mail SOLLTE die Serversignatur eingehender E-Mails automatisch authentifizieren.

> [!info]- Guidance
>Die DKIM-Signatur ist zu unterscheiden von einer PGP-Signatur, die in der Regel nicht automatisch vergeben wird.  E-Mails ohne DKIM sind unzureichend authentifiziert, so dass sie leicht für Spoofing oder Phishing missbraucht werden können. Allerdings werden noch immer E-Mails ohne DKIM verschickt, so dass eine Blockierung zu funktionalen Einschränkungen führen könnte. Kompromissmaßnahmen können z.B. die Markierung der E-Mail mit einem Warnhinweis , Allowlisting, Greylisting, Quarantäne oder eine Filterung durch Anomalieerkennung sein. Die Formulierung "im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik IDM festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 2e782128-57ea-4573-a44e-5538d0dd1240 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 2e782128-57ea-4573-a44e-5538d0dd1240 |
