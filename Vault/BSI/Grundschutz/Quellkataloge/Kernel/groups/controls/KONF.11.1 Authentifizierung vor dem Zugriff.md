---
tags: Produktbeschreibung_Zero_Trust
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.11.1 Authentifizierung vor dem Zugriff
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.11.1 - Authentifizierung vor dem Zugriff
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Zero Trust](tags_Zero Trust)"
Gruppe: [KONF.11 Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md)
---

> [!info]- Untergeordnete Controls
> [KONF.11.1.1 Authentifizierung von geplanten Konversationen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.11.1.1%20Authentifizierung%20von%20geplanten%20Konversationen.md)> [KONF.11.1.2 Authentifizierung von Netzverbindungen - clientseitig](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.11.1.2%20Authentifizierung%20von%20Netzverbindungen%20-%20clientseitig.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md) *** | Anwendungen | SOLLTE | Zugriffe auf schützenswerte Daten | im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement | authentifizieren | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE Zugriffe auf schützenswerte Daten im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement authentifizieren.

> [!info]- Guidance
>Ziel ist es, vertrauliche Daten vor dem Zugriff von Unbefugten zu schützen. Relevant sind hierbei sowohl Frontend-Zugänge wie Webportale, als auch Backend-Datenschnittstellen wie Datenbank-API. Dies kann durch eine anwendungsspezifische Authentifizierung, oder durch Nutzung eines zentralen Identity Providers (Single-Sign-On) erfüllt werden. Für die Authentifizierung kommen z.B. Passwörter, X.509-Zertifikate, OTP-Token in Frage. Zweckmäßig ist hierfür der Einsatz von Standardkomponenten wie OAuth 2.0 und die Verbindung mit einem zentralen Berechtigungsmanagement der Anwendung. Im Einklang mit den Anforderungen des Identitäts- und Berechtigungsmanagements bedeutet, dass für die Anwendung die Anforderungen aus der Praktik Identitäts- und Berechtigungsmanagement erfüllt sind, die dort festgelegt wurden. Hierzu gehört die Art der Authentifizierung (z.B. Passwort, Biometrie, Mehr-Faktor-Authentifizierung) ebenso wie die relevanten Parameter (Passwortkomplexität, etc.). Auf Daten die nicht vertraulich (z.B. öffentlich) sind kann auch ohne Authentifizierung Zugriff erlaubt sein. Die Formulierung "im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik Berechtigung (BER) festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist. Verarbeitet die Anwendung gar keine vertraulichen Daten, dann ist die Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 6bcd486c-909c-424c-9f78-35ed96588a5c |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 6bcd486c-909c-424c-9f78-35ed96588a5c |

> [!info]- Links> > related: [BER.1.1 Verfahren und Regelungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.1.1%20Verfahren%20und%20Regelungen.md)
