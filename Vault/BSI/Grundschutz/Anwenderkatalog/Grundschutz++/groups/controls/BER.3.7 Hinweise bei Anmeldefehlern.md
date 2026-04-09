---
tags: Credential_Stuffing_Brute-Force-Attacke
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.7 Hinweise bei Anmeldefehlern
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.7 - Hinweise bei Anmeldefehlern
Tags: "[Credential Stuffing](tags_Credential Stuffing)" "[Brute-Force-Attacke](tags_Brute-Force-Attacke)"
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md) *** | Anwendungen | SOLLTE | Hinweise darauf, ob ein Zugangskonto existiert | bei erfolglosen Anmeldeversuchen | deaktivieren | Konfigurationshistorie | >Berechtigung für Anwendungen SOLLTE Hinweise darauf, ob ein Zugangskonto existiert bei erfolglosen Anmeldeversuchen deaktivieren.

> [!info]- Guidance
>Den Hinweis, dass bei erfolglosen Anmeldeversuchen das Passwort oder die Kennung falsch ist, könnte ein Angreifer als sogenannte User Enumeration (Benutzerkonten-Aufzählung) oder Account Discovery (Konto-Entdeckung) Schwachstelle ausnutzen. Dadurch wird das Risiko einer Brute-Force-Attacke oder eines Credential Stuffings erhöht, bei der ein Angreifer eine Liste potenzieller Benutzernamen durchprobieren könnte, um gültige Konten zu identifizieren. Der Schutz kann gewährleisten, dass ein Angreifer nicht automatisch weiß, welche Konten er als Nächstes mit Passwörtern attackieren muss oder Rückschlüsse auf registrierte Zugangskonten erhält. Zur Umsetzung kann die Institution alle Rückmeldungen bei fehlgeschlagenen Anmeldeversuchen so vereinheitlichen, dass sie keinen Aufschluss über den Grund des Fehlschlags geben, beispielsweise durch die generische Nachricht „Der eingegebene Benutzername oder das Passwort ist ungültig.“.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | dd5fcc0c-d602-4d15-839c-5adb4fef150e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | dd5fcc0c-d602-4d15-839c-5adb4fef150e |
